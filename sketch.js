





 var dog,dogImage,happy,database,FoodStock,FoodS

function preload()
{


}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,450,20,50)
  dogImage=loadImage("images/dogImg.png")
  
  


}


function draw() {  
background("blue")


  drawSprites();

dog.addImage("dog",dogImage)
}



