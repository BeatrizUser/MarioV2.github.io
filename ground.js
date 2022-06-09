class GramaGround{
    constructor(){
        this.r = 0
        this.x = 0
        this.y = height
    }
    move(){
        this.y = constrain(this.y, 0, height - 47)
    }
    show(){
        image(groundImg,this.x, this.y, this.r ,47)
        
        // VISUALIZADOR DO COLLIDER
        // fill(255, 50)
        // rect(this.x, this.y, this.r, 47)

    }
}