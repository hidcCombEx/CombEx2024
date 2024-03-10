function preload() {
    osl = loadImage('logo/osl.svg')
}

function setup() {
    canvas = createCanvas(windowWidth * 0.8 / pixelDensity(), windowHeight * 0.8 / pixelDensity())
    canvas.parent('sketch')

    osl.crossOrigin = 'Anonymous';
}

function windowResized() {
    resizeCanvas(windowWidth * 0.8 / pixelDensity(), windowHeight * 0.8 / pixelDensity())
}

function draw() {
    image(osl, random(width), random(height), osl.width / 10, osl.height / 10)
}