var score = 0;
let x=1;
const point = new Audio("pointUp.mp3");
const crack=new Audio("crack.mp3");
const box = document.querySelector(".box");
const egg = document.querySelector(".egg");
const broken=document.querySelector(".brokenEgg");
var xCoordinateBox = 50;
box.style.left = xCoordinateBox + "%";
document.addEventListener("keydown", event => {
  if (event.key == 'd'  || event.key=='ArrowRight') {
    window.requestAnimationFrame(right);
  }
  if (event.key == 'a' || event.key=='ArrowLeft') {
    window.requestAnimationFrame(left);
  }
});

var lives = 5;
var xCoordinateegg = Math.floor(Math.random()*90);
egg.style.left = xCoordinateegg + "%";
var yCoordinateegg = 0;
eggDrop();
function eggDrop() {
  if(!lives){
    let enter = prompt("Your score: " + score + '\n' + 'Enter "Start" to Play Again');
    if(enter=='Start'){
    lives = 5;
    egg.style.visibility = "visible";
    document.querySelector(".lives").innerHTML = "Lives: " + lives;
    score = 0;
    xCoordinateegg = 50;
    xCoordinateBox = 50;
    box.style.left = 50 + "%";
    egg.style.left = 50 + "%";
    document.querySelector(".score").innerHTML = "Score: " + score;
    }
  }
  let randomEgg = Math.floor(Math.random() * 3) + 1;
  egg.style.top = yCoordinateegg + "px";
  yCoordinateegg += 2;
  if (yCoordinateegg<=474 && yCoordinateegg>=404) {
    if(yCoordinateegg==404){
    if (xCoordinateBox - 1.6 <= Math.floor(xCoordinateegg) && Math.floor(xCoordinateegg) <= xCoordinateBox + 1.8) {
      point.play();
      score += 10;
      document.querySelector(".score").innerHTML = "Score: " + score;
      yCoordinateegg = 0;
    xCoordinateegg = Math.floor(Math.random()*90)+5;
    egg.style.left = xCoordinateegg + "%";
    document.querySelectorAll("img")[1].setAttribute("src", "egg" + randomEgg + ".png");
    } 
  }
  else {
    if(yCoordinateegg==474){
      crack.play();
      lives--;
      broken.style.left=xCoordinateegg+"%";
      broken.style.visibility="visible";
      setTimeout(function(){broken.style.visibility="hidden";},1000)
  document.querySelector(".lives").innerHTML="Lives: "+lives;
    yCoordinateegg = 0;
    xCoordinateegg = Math.floor(Math.random()*90)+5;
    egg.style.left = xCoordinateegg + "%";
    document.querySelectorAll("img")[1].setAttribute("src", "egg" + randomEgg + ".png");
  }
}
}
requestAnimationFrame(eggDrop);
}         
function right(){
  box.style.transform="rotateY(180deg)";
    xCoordinateBox += 1.5;
    if (xCoordinateBox<100)
      box.style.left = xCoordinateBox + "%";
    else {
      xCoordinateBox = 0;
      box.style.left = xCoordinateBox + "%";
    }
    addEventListener(document,"keydown",function(event){
      if(event.key=='d')
      requestAnimationFrame(right);
    });
}
function left(){
  if(box.style.transform!="rotateY(360deg)")
  box.style.transform="rotateY(360deg)";
    xCoordinateBox -= 1.5;
    if (xCoordinateBox > 0) box.style.left = xCoordinateBox + "%";
    else {
      xCoordinateBox = 99;
      box.style.left = xCoordinateBox + "%";
    }
    addEventListener(document,"keydown",function(event){
      if(event.key=='a')
      requestAnimationFrame(left);
    });
}