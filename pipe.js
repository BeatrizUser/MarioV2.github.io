class Pipe{
    constructor(){
        this.r = 40
        this.x = width
        this.y = height - 82

    }
    move(){
        this.x -= 5
    }
    show(){
        image(pipeImg, this.x, this.y, this.r, this.r)

        // VISUALIZADOR DO COLLIDER
        fill(255, 50)
        rect(this.x, this.y, this.r, this.r+10)
    }
}