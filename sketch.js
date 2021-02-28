const Engine=Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


   engine = Engine.create();
   world = engine.world;

ground1=new Ground(1200,650,500,20);

 block1=new Block(1200,600);
 block2=new Block(1100,600);
 block3=new Block(1150,600);
 block4=new Block(1250,600);
 block5=new Block(1000,600);
 block6=new Block(1050,600);
 block7=new Block(1300,600);
 block8=new Block(1350,600);
 block9=new Block(1400,600);
 block10=new Block(1200,530);
 block11=new Block(1100,530);
 block12=new Block(1150,530);
 block13=new Block(1250,530);
 //block14=new Block(1000,500);
 block15=new Block(1050,530);
 block16=new Block(1300,530);
 block17=new Block(1350,530);
 
polygon1=new Polygon();

//ground2=new Ground(10,630,1500,20);

sling1 = new sling(polygon1.body,{x:200,y:600});

Engine.run(engine);
  
}


function draw() {
 background("brown");
Engine.update(engine);
ground1.display();
//ground2.dispaly();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
//block14.display();
block15.display();
block16.display();
block17.display();

polygon1.display();

}
function mouseDragged(){
   Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   sling1.fly();
}
function keyPressed(){
   if(keyCode===32){
      sling1.attach(polygon1.body);
   }
}







