class Ground{
    constructor(){
        this.r = 50
        this.x = 80
        this.y = 0
    }
    move(){
        console.log(this.x)
        this.x -= 5
    }
    show(){
        image(groundImg,this.x, displayHeight-138, 0, 0)
        
        // VISUALIZADOR DO COLLIDER
        // fill(255, 50)
        // rect(this.x, this.y, this.r, 47)

    }
}