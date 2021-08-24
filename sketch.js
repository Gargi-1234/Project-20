var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/catSitting.png");
    catImg2=loadAnimation("images/catWalking1.png","images/catWalking2.png");
    catImg3= loadAnimation("images/catHappy.png");
    mouseImg1=loadAnimation("images/mouseGift.png");
    mouseImg2= loadAnimation("images/mouseTease1.png","images/mouseTease2.png");
    mouseImg3=loadAnimation("images/mouseHappy.png");
    catHungry1 = loadAnimation("images/catEat1.png");
    catHungry2 = loadAnimation("images/catEat2.png");
    giftImg = loadAnimation("images/gift.png")
    mouseGift1 = loadAnimation("images/mouseGift.png")
    mouseGift2 = loadAnimation("images/mouseNoGift.png")
    catChase = loadAnimation("images/catWalk1.png","images/catWalk2.png")
    
}

function setup(){
    canvas = createCanvas(1000,800);

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.15;
    //mouse.debug = true
    
    cat = createSprite(900, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.25;
    //cat.debug = true

    cat2 = createSprite(600, 625);
    cat2.addAnimation("cat",catChase);
    cat2.scale = 0.25
    cat2.debug =true
    cat2.setCollider("rectangle",0,0,600,600)
    cat2.visible = false


    makeCatWalk();

}

function draw() {

    background(bg);

//CHOOSE THE CORRECT IF BLOCK FOR CHECKING COLLISION 

    /*if(cat.y - mouse.x < (cat.height - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }*/
/*
    if(cat.x - mouse.y < (cat.width - mouse.y)/2)
    { 
        cat.velocityX= -4;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }
*/
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX= 0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.velocityX = 0
        mouse.changeAnimation("mouseLastImage");
        cat.x = 405
        
        if(cat.x > 400){
            cat.addAnimation("cathungry", catHungry1);
            cat.x = 450;
            cat.scale=1.5;
            cat.changeAnimation("cathungry");
            mouse.addAnimation("mouseWithGift", mouseGift1);
            mouse.changeAnimation("mouseWithGift");
            cat.velocityX = 0
            //mouse.x = 100
            mouse.velocityX = 3 
          
        }
    }

    if (cat2.x - mouse.x < mouse.width/2 + cat2.width/2
        && mouse.x - cat2.x < mouse.width/2 - cat2.width/2){
        cat2.velocityX = 2
        cat2.visible = true
        cat2.x = 200
        cat.destroy()
    }

    /*if(cat.y - mouse.y < (cat.height - mouse.height)/2)
    { 
        cat.velocityX= 4;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }*/

    drawSprites();
}


function makeCatWalk(){

        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25; 

        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
}
