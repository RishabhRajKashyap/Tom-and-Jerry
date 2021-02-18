var tom, catImg1, catImg2, catImg3;
var jerry, mouseImg1, mouseImg2, mouseImg3;
var gardenImg;

function preload() {

    //load the images here
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png, cat2.png");

mouseImg1 = loadAnimation("images/mouse1Img");
mouseImg2 = loadAnimation("images/mouse2.png", "mouse3.png");

gardenImg = loadImage("garden.png");


}

function setup(){
    createCanvas(1000,800);

garden = createSprite(500, 400);
garden.addImage(gardenImg);

    //create tom and jerry sprites here
tom = createSprite(800, 600, 50, 70);
tom.addAnimation(catImg1);

jerry = createSprite(200, 600, 30, 50);
jerry.addAnimation(mouseImg1);

}

function draw() {

    background(0);

    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
    tom.changeAnimation(catImg3);
    jerry.changeAnimation(mouseImg3);
}

    drawSprites();

text(mouseX + ',' + mouseY, 10, 45);

}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.changeAnimation(catImg2);
    jerry.changeAnimation(mouseImg2);
}

}