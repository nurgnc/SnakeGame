let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let box = 32;
let move;


// Images
let ground = new Image();
ground.src = "images/ground.jpg";

let food = new Image();
food.src = "images/food.png";

//Snake Array
let snake = [];
snake[0] = {
    x: 4*32,
    y: 7*32
}

// Food Object
let foodi = {
    x: Math.floor(Math.random() *17 + 1) * box,
    y: Math.floor(Math.random() *15 + 3) * box, 
}

// Event Listener
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37) {
        move = "left";
    }
    else if(event.keyCode == 38) {
        move = "top";
    }
    else if(event.keyCode == 39) {
        move = "right";
    }
    else if(event.keyCode == 40) {
        move = "down";
    }
    console.log(move)
})

function draw() {
    for(let i=0; i<snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "black" : "red";
        ctx.fillRect (snake[i].x, snake[i].y, box, box);
    }
    // snake old position

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(move == "left") {
        snakeX -= box;
    }
    else if(move == "top") {
        snakeY -= box;
    }
    else if(move == "right") {
        snakeX += box;
    }
    else if(move == "down") {
        snakeY += box;
    }

    //snake new head
    let newHead = {
        x: snakeX, 
        y: snakeY,
    }
    snake.unshift(newHead);




    ctx.drawImage(food, 0, 0, box, box, foodi.x, foodi.y, box, box);
}

function loop() {
    ctx.drawImage(ground, 0, 0, 608, 608, 0, 0, 608, 608);
    draw();
}

let game = setInterval(loop, 100);