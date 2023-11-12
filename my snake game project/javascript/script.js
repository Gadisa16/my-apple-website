$("button").on("click", change);

function change(){
const canvas =document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

//dividing canvas into square
const scale= 20;
const rows= canvas.height/scale;
const columns= canvas.width/scale;

// //an array to save the bodies of snake
let score= 0;
let snake=[];

snake[0] = {
    x: (Math.floor(Math.random()*columns))*scale,
    y: (Math.floor(Math.random()*rows))*scale
};

let food={
    x: (Math.floor(Math.random()*columns)) * scale,
    y: (Math.floor(Math.random()*rows)) *scale
}

//call our draw function every 100ms
let playGame= setInterval(draw, 100);

let d= "right";

document.onkeydown= direction;

function direction(event){
    let key= event.keyCode;

    if(key==37 && d!="right"){
        d= "left";
    }
    else if(key== 38 && d!= "down"){
        d= "up";
    }
    else if(key==39 && d!="left"){
        d="right"
    }
    else if(key==40 && d!="up"){
        d= "down";
    }
}

function draw(){
ctx.clearRect(0, 0, canvas.width, canvas.height); //inorder to delete the popped rectangle

for(let i=0; i< snake.length; i++){
ctx.fillStyle= "#fff"; //inner color of rectangle
ctx.strokeStyle="red"; //border color of rectangle
ctx.fillRect(snake[i].x, snake[i].y, scale, scale); // you can use number 20 inplace of scale, since scale=20
ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);

}

//draw food
ctx.fillStyle = "#ff0";
ctx.strokeStyle="green";
ctx.fillRect(food.x, food.y, scale, scale);
ctx.strokeRect(food.x, food.y, scale, scale);

//old head position
let snakeX = snake[0].x;
let snakeY = snake[0].y;


//which direction
if(d=="left") snakeX=snakeX - scale;
if(d=="up") snakeY=snakeY - scale;
if(d=="right") snakeX=snakeX + scale;
if(d=="down") snakeY=snakeY + scale;

if(snakeX > canvas.width){
    snakeX=0;
}
if(snakeY > canvas.height){
    snakeY=0;
}
if(snakeX < 0){
    snakeX=canvas.width;
}
if(snakeY < 0){
    snakeY=canvas.height;
}

//if the snake eats the food it grows
if(snakeX==food.x && snakeY == food.y){
    score++;
    document.getElementById("scoreRecord").value= score;
    food={
        x: (Math.floor(Math.random() * columns))*scale,
        y: (Math.floor(Math.random() * rows))*scale
    }
}
else{
    //to remove the tail
    snake.pop();
}

//new head position
let newHead ={
    x: snakeX,
    y: snakeY
}

if(eatSelf(newHead, snake)){
    clearInterval(playGame);
}

snake.unshift(newHead);

}

//check if snake is eating itself
function eatSelf(head, array){
    for(let i =0; i< array.length; i++){
        if(head.x == array[i].x && head.y== array[i].y){
            return true;
        }
    }
    return false;
}
}

