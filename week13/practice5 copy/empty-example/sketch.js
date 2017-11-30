var posX = 0;
var posY = 0;
var targetPosX = [100, 300, 500];
var targetPosY = 120;
var f = [];
var b = [];
var numberBubbles = 20;
var bgImage, bgImage2;
var bgChange, bgChange2;
var currentBgImage;
var fishImage;
var orangeImage;
var hitZoneX = 600;
var hitZoneY = 550;
var soundFile;

function preload() {
    bgImage = loadImage("assets/mate.jpg");

    bgImage2 = loadImage("assets/seaw.jpg");
fishImage=loadImage("assets/fish.png");
    orangeImage=loadImage("assets/orange.png");
   soundFile = loadSound("assets/back.mp3");
}

function setup() {
    createCanvas(800, 600);
    bgChange = createButton("find your food");
    bgChange.position(200, 500);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("find your mate");
    bgChange2.position(400, 500);
    bgChange2.mousePressed(changeBgFunction2);
    currentBgImage = bgImage;

    noStroke();

    //adds 20 bubbles to the array
    for (var g = 0; g < numberBubbles; g++) {
        b.push(new Bubble());

    }
}


function draw() {
    background("grey");
    
  
    imageMode(CENTER);

    image(currentBgImage, 400, 300, 800, 600);
    image(currentBgImage, 400, 300, 800, 600);
    
    posX = mouseX;
    posY = mouseY;
image(fishImage,posX, posY, 140, 80)
     noStroke();
    //face
    
    
//    fill("beige");
//    ellipse(posX, posY, 25, 30);


    //eyes
    var wiggleX = map(mouseX, 0, width, -10, 10);

 
    fill(0);
   
    ellipse(posX + 50 + wiggleX, posY - 20, 10, 10);

  var hitZoneDist = dist(hitZoneX,hitZoneY,mouseX,mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if(hitZoneDist <= 30){
       console.log("We are totally in the zone!");
        image(orangeImage,600,550,100,100);
         soundFile.setVolume(1);
    soundFile.play();
        
       }
    strokeWeight(5);
    ellipse(hitZoneX,hitZoneY, 10,10);
    
    for (var g = 0; g < b.length; g++) {
        b[g].move();
        b[g].draw();

    }

   

}



//bubble function
function Bubble() {
    this.x = random(0, width);
    this.size = random(3, 15);
    this.y = height + random(this.size * 2, this.size * 20);
    this.speed = 2;

}

Bubble.prototype.constructor = Bubble;
Bubble.prototype.move = function () {
    this.y -= this.speed;
    if (this.y < -this.size * 2) {
        this.y = height + random(this.size * 2, this.size * 20);
    }
};

Bubble.prototype.draw = function () {
    fill(255, 255, 255, 75);
    ellipse(this.x, this.y, this.size, this.size);

};


//bubble function
function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}

// if (mouseX > targetPosX[0] - 100 && mouseX < targetPosX[0] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
//        image(pics[0], targetPosX[0], targetPosY);

//
//    }
