let button = [], click = 0

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
    setButton()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight * 0.75)
    clear()
    setButton()
}

function draw() {
    cursor(ARROW)

    if (click > 0) click -= 0.5
    button.forEach (p => p.display())
}

function setButton() {
    button = []
    button.push(new Crew('yawayats', yy))
    button.push(new Crew('opensourcelab', osl))
    button.push(new Crew('jochiwontypography', jt))
    button.push(new Crew('primeframe', pf))
    button.push(new Crew('vivid', vv))
}

function mouseReleased() {
    click = 1
}

class Crew {
    constructor(club, img) {
        this.x = random(width * 0.2, width * 0.8)
        this.y = random(height * 0.3, height * 0.8)
        this.r = random(50, 240)
        this.club = club
        this.img = img
    }

    display() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.r / 2) {
            if (click) location.href=`${this.club}.html#archive`
            cursor(HAND)
        }

        fill(7, 76, 92)
        stroke(86)
        strokeWeight(3)
        circle(this.x, this.y, this.r)

        noStroke()
        image(this.img, this.x, this.y, this.r, this.r * 0.75)
    }
}
