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
    createCanvas(700, 300);
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
    if(random(2) < 0.001){
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