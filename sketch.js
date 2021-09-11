const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob_1,bob_2,bob_3,bob_4,bob_5;
var con_1,con_2,con_3,con_4,con_5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		isStatic:false
	}

	roof = Bodies.rectangle(200,100,230,20,roof_options);
    World.add(world,roof);

	bob_1 = Bodies.circle(100,150,20,ball_options);
	bob_2 = Bodies.circle(150,150,20,ball_options);
	bob_3 = Bodies.circle(200,150,20,ball_options);
	bob_4 = Bodies.circle(250,150,20,ball_options);
	bob_5 = Bodies.circle(300,150,20,ball_options);

	World.add(world,bob_1);
	World.add(world,bob_2);
	World.add(world,bob_3);
	World.add(world,bob_4);
	World.add(world,bob_5);

	var con_option = {
		bodyA:bob_1 ,
		pointB:{x:100,y : 100},
		length : 150,
		stiffness: 0.7
	}
	con_1 =  Constraint.create(con_option);
	World.add(world,con_1)
	
	var con_option2 = {
		bodyA:bob_2 ,
		pointB:{x:150,y : 100},
		length : 150,
		stiffness: 0.7
	}
	con_2 =  Constraint.create(con_option2);
	World.add(world,con_2)

	var con_option3 = {
		bodyA:bob_3 ,
		pointB:{x:200,y : 100},
		length : 150,
		stiffness: 0.7
	}
	con_3 =  Constraint.create(con_option3);
	World.add(world,con_3)

	var con_option4 = {
		bodyA:bob_4 ,
		pointB:{x:250,y : 100},
		length : 150,
		stiffness: 0.7
	}
	con_4 =  Constraint.create(con_option4);
	World.add(world,con_4)

	var con_option5 = {
		bodyA:bob_5 ,
		pointB:{x:300,y : 100},
		length : 150,
		stiffness: 0.7
	}
	con_5 =  Constraint.create(con_option5);
	World.add(world,con_5)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
	ellipse(bob_1.position.x,bob_1.position.y,20,20);
	ellipse(bob_2.position.x,bob_2.position.y,20,20);
	ellipse(bob_3.position.x,bob_3.position.y,20,20);
	ellipse(bob_4.position.x,bob_4.position.y,20,20);
	ellipse(bob_5.position.x,bob_5.position.y,20,20);

	line(con_1.pointB.x,con_1.pointB.y,bob_1.position.x,bob_1.position.y);	
	line(con_2.pointB.x,con_2.pointB.y,bob_2.position.x,bob_2.position.y);	
	line(con_3.pointB.x,con_3.pointB.y,bob_3.position.x,bob_3.position.y);	
	line(con_4.pointB.x,con_4.pointB.y,bob_4.position.x,bob_4.position.y);	
	line(con_5.pointB.x,con_5.pointB.y,bob_5.position.x,bob_5.position.y);	
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bob_1,{x:0,y:0},{x:-0.05	,y:0})
	}
}
