let canvas, page = 0

function setup() {
    canvas = createCanvas(windowWidth, windowHeight - 4)
    canvas.parent("bg")
    canvas.style('position: fixed')

    mouseX = width / 2
    mouseY = height / 2

    let home = select('#home')
    let about = select('#about')
    let crews = select('#crews')
    let projects = select('#projects')

    home.mousePressed(function() { page = 0 })
    about.mousePressed(function() { page = 1 })
    crews.mousePressed(function() { page = 2 })
    projects.mousePressed(function() { page = 3 })

    noStroke()
}

function windowResized() {
    resizeCanvas(windowWidth, page == 0? windowHeight:height)
}

function draw() {
    if (page > 0) {
        if (height > windowHeight / 4) {
            resizeCanvas(windowWidth, height / 1.04)
        }
    } else {
        if (height < windowHeight - 4.01) {
            resizeCanvas(windowWidth, height * 1.04)
        } else {
            resizeCanvas(windowWidth, windowHeight - 4)
        }
    }

    background(page == 0? 240:200)

    fill(0)
    let test = createVector(width / 2, height / 2 + map(window.scrollY, 0, 2000, 0, 300))
    circle(test.x, test.y, 100)

    let r = map(dist(test.x, test.y, mouseX, mouseY), 0, 500, 100, 50)

    fill(255, 96, 20)
    circle(mouseX, mouseY, r)
}