var wall,car;
var speed,weight;

var wall,thickness;
var bullet,speed,weight
var bulletleftEdge; 

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,400/2)
  bullet=createSprite(50, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);

    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  }
}

function draw(){
  
  background(0,0,0);  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRight=lbullet.x +lbullet.width;
  wallleftEdge=lwall.x;
  if (bulletRightEdge>=wallleftEdge)
  {
    return true
  }
  return false
}


  
  
