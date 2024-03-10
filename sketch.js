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

    noStroke()
    imageMode(CENTER)
    textAlign(CENTER, CENTER)
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
        this.a = random(TAU)
        this.club = club
        this.img = img
    }

    display() {
        if (dist(mouseX, mouseY, this.x, this.y) < this.r / 2) {
            if (click) location.href=`${this.club}.html#archive`
            cursor(HAND)
        }

        push()
        translate(this.x, this.y)
        rotate(this.a)
        fill(242)
        circle(0, 0, this.r)
        
        image(this.img, 0, 0, this.r, this.r * 0.75)
        pop()
    }
}
