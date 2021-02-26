let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let box = 32;


// Images
let ground = new Image();
ground.src = "images/ground.jpg";

let food = new Image();
food.src = "images/food.png"

//Snake Array
let snake = [];
snake[0] = {
    x: 4*32,
    y: 7*32
}

// Food Object
let food = {
    x: Math.floor(Math.random() *17 + 1) * box;
}

function draw() {
    for(let i=0; i<snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "black" : "red";
        ctx.fillRect (snake[i].x, snake[i].y, box, box);
    }
}

function loop() {
    ctx.drawImage(ground, 0, 0, 608, 608, 0, 0, 608, 608);
    draw();
}

let game = setInterval(loop, 100);