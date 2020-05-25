const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine, world;
var tanker;


function setup() {
    var canvas = createCanvas(800, 500);
    engine = Engine.create();
    world=engine.world;
    tanker = new Tanker(65, height- 80, 70, 30);

  
}

function draw() {
    background(255)
    Matter.Engine.update(engine);
    
    tanker.display();
    
}

