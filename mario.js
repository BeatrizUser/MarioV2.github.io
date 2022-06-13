class Mario{
    constructor(){
        this.r = 30
        this.x = (this.r * 3)
        this.y = height - 80
        this.vy = 0
        this.gravity = 1
        this.puloDuplo = false
    }
    
    jump(){
        if (this.y == height - 88 && this.puloDuplo == false){
            this.vy = -15
            this.puloDuplo = true
        }else if(this.puloDuplo == true){
            this.vy = -10
            this.puloDuplo = false
        }
    }

    hits(pipe){
       return collideRectRect(this.x+2, this.y+3, this.r-6, 43, pipe.x, pipe.y-2, pipe.r, pipe.r+10)
    }
    move(){
        this.y += this.vy;
        this.vy += this.gravity
        this.y = constrain(this.y, 0, height - 88)
    }
    show(){
        image(marioImg,this.x, this.y, this.r ,47)
        
        // VISUALIZADOR DO COLLIDER
        // fill(255, 50)
        // rect(this.x+2, this.y+3, this.r-6, 43)

    }
}