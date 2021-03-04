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

    if(event.keyCode == 37 && move!="right") {
        move = "left";
    }
    else if(event.keyCode == 38 && move!="down") {
        move = "top";
    }
    else if(event.keyCode == 39 && move!="left") {
        move = "right";
    }
    else if(event.keyCode == 40 && move!="top") {
        move = "down";
    }
    console.log(move)
})

function draw() {
    for(let i=0; i<snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "black" : "green";
        ctx.fillRect (snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    // snake old position

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    

    if(move == "left" && snakeX != box) {
        snakeX -= box;
    }
    else if(move == "top" && snakeY != 3*box) {
        snakeY -= box;
    }
    else if(move == "right" && snakeX != 17*box) {
        snakeX += box;
    }
    else if(move == "down" && snakeY != 17*box) {
        snakeY += box;
    }

    //snake new head
    let newHead = {
        x: snakeX, 
        y: snakeY,
    }

    if(snakeX == foodi.x && snakeY == foodi.y){
        foodi.x = Math.floor(Math.random() *17 + 1) * box;
        foodi.y = Math.floor(Math.random() *15 + 3) * box;
    } else {
        snake.pop();
    }
    snake.unshift(newHead);




    ctx.drawImage(food, 0, 0, box, box, foodi.x, foodi.y, box, box);
}

function loop() {
    ctx.drawImage(ground, 0, 0, 608, 608, 0, 0, 608, 608);
    draw();
}

let game = setInterval(loop, 100);