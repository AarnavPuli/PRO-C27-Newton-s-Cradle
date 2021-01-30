const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;
    roof=new Roof(width/2, height/4, width/7, 20)
    balldiameter=40
    ball1=new Ball(width/2-balldiameter*2, height/4+500,balldiameter)
    ball2=new Ball(width/2-balldiameter, height/4+500,balldiameter)
    ball3=new Ball(width/2, height/4+500,balldiameter)
    ball4=new Ball(width/2+balldiameter, height/4+500,balldiameter)
    ball5=new Ball(width/2+balldiameter*2, height/4+500,balldiameter)
    rope1=new Rope(ball1.body,roof.body, -balldiameter*2,0)
    rope2=new Rope(ball2.body,roof.body, -balldiameter,0)
    rope3=new Rope(ball3.body,roof.body, 0,0)
    rope4=new Rope(ball4.body,roof.body, balldiameter,0)
    rope5=new Rope(ball5.body,roof.body, balldiameter*2,0)

    Engine.run(engine);
}

function draw(){
    background("white");
    ball1.display()
    ball2.display()
    ball3.display()
    ball4.display()
    ball5.display()
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
}
function keyPressed(){
    if (keyCode==UP_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x:85, y:-85})
    }
}
function drawLine(constraint){
ballbodyposition=constraint.bodyA.position
roofbodyposition=constraint.bodyB.position
roofoffset=constraint.pointB
roofx=roofbodyposition.x+roofoffset.x
roofy=roofbodyposition.y+roofoffset.y
line(ballbodyposition.x,ballbodyposition.y,roofx,roofy)
}