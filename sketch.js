let mario, ground, pipeImg, marioImg, backgroundImg, groundImg;
let pipes = []
let grama = []
let value = 0;

function preload(){
    marioImg = loadImage('assets/mario.gif')
    pipeImg = loadImage('assets/pipe.png')
    backgroundImg = loadImage('assets/Background_1.webp')
    groundImg = loadImage('assets/grama.png')
}
function setup() {
    // createCanvas(displayWidth, displayHeight*0.75); **FULLSCREEN**
    createCanvas(720, 320);
    mario = new Mario()
    mario_morto = new Mario()
    ground = new Ground()
  }
function keyPressed(){
    if(key == " "){
        mario.jump()
    }
  }
function touchStarted(){
    if(value === 0){
        mario.jump()
    }
  }
  
function draw() {
// FUNDO
    background(backgroundImg);

// BROTAR GRAMA
    ground.show()
    ground.move()
    if(ground.x < -617.5){
        ground.x = 0
        grama.push(new Ground())
    }
    for (let g of grama) {
        g.show()
        g.move()
    }
    if(grama.length = 1){
        grama.splice(0)
    }
// BROTAR PIPES
    if(random(1) < 0.01){
        pipes.push(new Pipe())
    }
    for (let p of pipes) {
        p.move()
        p.show()
        if (mario.hits(p)){

            console.log('Game Over')
            noLoop()
        }
    }
    
    mario.show()
    mario.move()
}