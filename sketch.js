let mario, ground, pipeImg, marioImg, backgroundImg, groundImg;
let pipes = []
let value = 0;

function preload(){
    marioImg = loadImage('assets/mario.gif')
    pipeImg = loadImage('assets/pipe.png')
    backgroundImg = loadImage('assets/Background_1.webp')
    groundImg = loadImage('assets/grama.png')
}
function setup() {
    createCanvas(displayWidth, displayHeight*0.8);
    mario = new Mario()
    mario_morto = new Mario()
    ground = new GramaGround()
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
    if(random(1) < 0.01){
        pipes.push(new Pipe())
    }
    background(backgroundImg);
    ground.show()
    ground.move()
    
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