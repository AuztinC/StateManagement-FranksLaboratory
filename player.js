export default class Player {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = document.getElementById("dogImage")
        this.widht = 200;
        this.height = 181.83;
        this.x = this.gameWidth/2 - this.widht/2;
        this.y = this.gameHeight - this.height;
        this.frameX = 1;
        this.frameY = 1;
    }
    draw(context){
        context.drawImage(this.image, this.widht * this.frameX, this.height * this.frameY, this.widht, this.height, this.x, this.y, this.widht, this.height)

    }
}