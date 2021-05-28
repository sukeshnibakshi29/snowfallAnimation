var snow;
var snow3;
var snow3Img;
var snow4;
var snow4Img;
var snow5;
var snow5Img;
var kids;
var kidsImg





function preload(){

snow3Img = loadImage("snow1.jpg");
  snow4Img = loadImage("snow4.webp");
  snow5Img = loadImage("snow5.webp");
 kidsImg = loadImage("188-1884592_winter.png");

}


function setup() {
  createCanvas(1000,600);

  
  snow3 = createSprite(500,300,1800,900);
  snow3.addImage(snow3Img);
  snow3.scale=2

    kids = createSprite(520,500,50,50);
    kids.addImage(kidsImg);
    kids.scale=0.5;
    


}

function draw() {
  background("lightblue");  
 
  
  
  var snow = Math.round(random(1,2));

if(World. frameCount % 100 == 0){
  if (snow == 1){
    snow4()
  }

    if(snow == 2){
    snow5();
  }
}


snow3.display();
  kids.display();

drawSprites();

}
  
function snow4(){
  var snow = createSprite(300,Math.round(random(200,27)),200,20);
  snow.addImage(snow4Img);
  snow.velocityY = 6;
  snow.lifetime = 550;
  snow.scale =0.2;
  
  }
  
  
   
    
  function snow5(){
    var snow = createSprite(500,Math.round(random(200,27)),200,20)
    snow.addImage(snow5Img);
    snow.velocityY = 6;
    snow.lifetime = 550;
    snow.scale =0.2;
    
    }