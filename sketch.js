var path, boy, leftBoundary, rightBoundary;
var pathPng, boyPng

var score;

function preload(){
  //pre-load images
  pathPng = loadImage("path.png");
  boyPng = loadAnimation("Runner-1.png","Runner-2.png");


}

function setup(){
  createCanvas(400,400);

  //moving background
  path= createSprite(200,200);
  path.addImage(pathPng);
  path.velocityY=4;
  path.scale=1;

  //boy running
  boy= createSprite(200,300);
  boy.addAnimation("boyRunning", boyPng);
  boy.scale=0.05

  // left boundary
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false;

  // right boundary
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible=false;


}

function draw() {
  background(0);
  path.velocityY=4;

 
  boy.x=World.mouseX;

  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // reset background
  if(path.y > 400 ){
    path.y = height/2;
  }

 drawSprites();
}
