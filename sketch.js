var dog, happyDog
var database
var foodS, foodStock

function preload(){
  Dog= loadImage("DogImg.png");
  happyDog = loadIamge("dogImg1.png")
}
function setup() {
createCanvas(500,500);
database = firebase.database()
 foodStock=database.ref('Food') ;
 foodStock.n("value", readStock);
  dog = createSprite(250, 350, 10, 60);
  dog.addImage(dogImg);
  dog.scale = 0.2;
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogHappy)
}
var series = [8, 2, 3, 14, 7, 9]
var min = series[0]
var i = 0
//text(min,400,400)
for (var i = 0; i < 6; i++) {
  //const element = array[index];
  if (min<series[i+1]){
    min = series[i]
  }
  else {
    min = series[i+1]
  }
  //min = series[i]
 text(min,400,400*(i+1)) 
}
//text(min,400,400)
  drawSprites();
  text(foodStock)
  textSixe(15)
  
}

function readStock(data){
  foodS = data.val();
}
function writeStock (x){
  if(x<=0){
    x=0
  }else{
    x=x = 1;
  }
database.ref ("/").update({
  Food: x
}

)

}



