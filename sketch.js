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
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 4)
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

    background(page == 0? 240:127)

    fill(255)
    circle(width / 2, height / 2 + map(window.scrollY, 0, 4000, 0, 100), 100)

    fill(0)
    circle(mouseX, mouseY, 50)
}