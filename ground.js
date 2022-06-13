class Ground{
    constructor(){
        this.r = 50
        this.x = 0
        this.y = 0
    }
    move(){
        this.x -= 5
    }
    show(){
        image(groundImg,this.x,272, 1327, 50)
        
        // VISUALIZADOR DO COLLIDER
        // fill(255, 50)
        // rect(this.x, this.y, this.r, 47)

    }
}