var garden,rabbit,maca, orangeLeaf,redl;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImg = loadImage("apple.png");

 orangeImg = loadImage("orangeLeaf.png");

  redImg = loadImage("redImage.png"); 






















}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);























}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);



var select_sprites = Math.round(random(1,3));

if(frameCount % 80 == 0){
  if (select_sprites == 1){
    criaraples();
  } else if (select_sprites == 2){
    criaror();
  }else{
    criarred();
  }
}



rabbit.x = World.mouseX;










criarred();
criaror();
  criaraples();
  drawSprites();
 
  


}
function criaraples(){
maca = createSprite(random(50,350),40,10,10);
maca.addImage(appleImg);
maca.scale = 0.07;
maca.velocityY = 3;
maca.lifetime = 150;
}
function criaror(){
  orangeLeaf = createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeImg);
  orangeLeaf.scale = 0.08;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 150;
  }
  function criarred(){
    redl = createSprite(random(50,350),40,10,10);
    redl.addImage(appleImg);
    redl.scale = 0.06;
    redl.velocityY = 3;
    redl.lifetime = 150;
    }
      


