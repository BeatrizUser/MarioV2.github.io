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
    createCanvas(displayWidth, displayHeight*0.75);
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
    background(backgroundImg);
    if(random(1) < 0.01){
        pipes.push(new Pipe())
    }

    for (let g of grama) {  
        if(g.x > displayWidth){
            g.move()
            g.show()
            console.log('andou')
        }
    }
    if(random(2) < 1){
        grama.push(new Ground())
    }
    for (let p of pipes) {
        p.move()
        p.show()
        if (mario.hits(p)){

            console.log('game over')
            noLoop()
        }
    }
    
    mario.show()
    mario.move()
}