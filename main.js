img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 300;
GameStatus="";

function preload() {
	world_start = loadSound("world_start.wav");
  mario_jump = loadSound("jump.png");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
  
  video=createCapture(VIDEO);
  video.size(600,300);
video.parent('game_console');
  
poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
	game()
}

function game()
{
  instializeInDraw();
  moveEnvironmrent(mario);
  drawSprites();
}

function draw() {
  background(220);
  //add one more condition to the below if condition, x co-ordinate of mario greater than or equal to zero 
  if(noseX < 300)
  { 
    marioX = marioX - 1;
  }
  if(noseX > 300)
  {
    marioX = marioX + 1;
  }
   if(noseY < 150)
  { 
    marioY = marioY - 1;
  }
  if(noseY > 600)
  {
    marioY = marioY + 1;
  
  image(img,marioX, marioY, 40,70);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX +", noseY = " + noseY);
    }
  }

  function startGame()
  {
    GameStatus="start";
    document.getElementById("status").innerHTML  = "Game is loading";
  }

function changeGameStatus(character)
{
  if((keyDown(control.up) || keyDown(control.uleft) || keyDown(control.right) ) && GameStatus== "start" && noseX!="" && gameComfig.status=="start")
  {
    world_start.play();
  }
}
function jumping (character){
  if( (noseY<200 && character.live) || (Touchisdoen && character.live
    )
}