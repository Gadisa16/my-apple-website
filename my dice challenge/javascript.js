function func(){
let rn1= Math.floor(Math.random()*6) +1;
let rn2= Math.floor(Math.random()*6) +1;

let changeSrc1= "images/dice" +rn1 +".png";
let changeSrc2= "images/dice" +rn2 +".png";

let img1= document.querySelector("img");
img1.setAttribute("src", changeSrc1);

let img2= document.querySelectorAll("img")[1];
img2.setAttribute("src", changeSrc2);

if(rn1> rn2){
    document.querySelector("h2").innerHTML= "🚩Play 1 Wins!";
}

else if(rn2> rn1){
    document.querySelector("h2").innerHTML ="Player 2 Wins!🚩";
}
else{
    document.querySelector("h2").innerHTML = "Equal!";
}


}