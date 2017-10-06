var posX = 0;
var posY = 0;

function setup() {
    createCanvas(1000, 1000); 
    background("beige");
  

   posX = width/2;
   posY = height/2;


}

function draw() {

    stroke(0);
    strokeWeight(1);
    fill("#F9E397");
    ellipse(posX, posY, 300, 300);
    fill("pink");
    rect(posX -40, posY + 90, 80, 20);
    fill(255);
    ellipse(posX-60,posY-40, 50, 60);
    ellipse(posX+60,posY-40, 50, 60);
    fill(0);
    ellipse(posX-60,posY-40, 20, 20);
    ellipse(posX+60,posY-40, 20, 20);   
    fill("yellow");
    triangle(posX,posY - 10,posX-30,posY + 65,posX+30,posY +65);
     
    stroke(0);
    line(posX - 40, posY+ 110, posX + 40, posY + 90);
    line(posX - 40, posY+ 90, posX + 40, posY + 110);

     noFill();
    arc(posX,posY,175,300, PI+QUARTER_PI, TWO_PI-QUARTER_PI);
    arc(posX,posY,200,300, PI, TWO_PI);
    arc(posX,posY,225,300, PI, TWO_PI);
    arc(posX,posY,250,300, PI, TWO_PI);
    arc(posX,posY,275,300, PI, TWO_PI);
    
    stroke("#937E57");
    strokeWeight(3);
    point(posX + 80,posY + 10);
    point(posX - 80,posY + 10);
    point(posX + 10,posY + 120);

}