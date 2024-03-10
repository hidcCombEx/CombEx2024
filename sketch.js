let button = [], click = 0
club = ['yawayats', 'opensourcelab', 'jochiwontypography', 'primeframe', 'vivid'],
logo = []

function preload() {
    yy = loadImage('logo/yawayats.svg')
    osl = loadImage('logo/osl.svg')
    jt = loadImage('logo/jtypo.svg')
    pf = loadImage('logo/pf.svg')
    vv = loadImage('logo/vivid.svg')
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight * 0.735)
    canvas.parent('sketch')

    imageMode(CENTER)
    textAlign(CENTER, CENTER)
    colorMode(HSB)

    logo = [yy, osl, jt, pf, vv]
    for (let i = 0; i < 5; i ++) button.push(new Crew(club[i], i))
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight * 0.75)
    clear()
    button = []
    for (let i = 0; i < 5; i ++) button.push(new Crew(club[i], i))
}

function draw() {
    cursor(ARROW)

    if (click > 0) click -= 0.5
    button.forEach (p => p.display())
}

function mouseReleased() {
    click = 1
}

class Crew {
    constructor(club, index) {
        this.x = random(width * 0.2, width * 0.8)
        this.y = random(height * 0.3, height * 0.8)
        this.r = random(50, 240)
        this.club = club
        this.index = index
    }

    display() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.r / 2) {
            if (click) location.href=`${this.club}.html#archive`
            cursor(HAND)
        }

        stroke(7, 76, 92)
        strokeWeight(3)
        circle(this.x, this.y, this.r)

        noStroke()
        image(logo[this.index], this.x, this.y)
    }
}