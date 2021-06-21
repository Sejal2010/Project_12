var garden,rabbit; 
var gardenImg,rabbitImg;
 var apple,appleImg; 
 var leaf,leafImg,leafImg2,LeafImg3; 
 function preload(){
    gardenImg = loadImage("grass.png"); 
    rabbitImg = loadImage("rabbit.png"); 
    appleImg = loadImage("apple.png");
     leafImg = loadImage("leaf.png"); 
     leafImg2 = loadImage("orangeLeaf.png"); 
     leafImg3 = loadImage("redImage.png");
     }
      function setup(){ 
        createCanvas(400,400); 
        // Moving background 
        garden=createSprite(200,200,20,20); 
        garden.addImage(gardenImg); 
        //creating boy running 
        rabbit = createSprite(180,340,30,30);
         rabbit.scale =0.09; 
         rabbit.addImage(rabbitImg); 
        } 
        function draw() { 
          background(0);
           edges= createEdgeSprites(); 
           rabbit.collide(edges);
           rabbit.x= World.mouseX 
           var selectSprites=Math.round(random(1,2));
            if (frameCount%80==0){
               if (selectSprites==1){ 
                 createApples();
                 }
                
                  if( selectSprites==2 ){ 
                    createLeaf ();
                  } 
                }
                   drawSprites(); 
                  }
                    function createApples(){
                      apple=createSprite(random(50,350),40,10,10);
                     apple.addImage(appleImg); 
                     apple.velocityY=2;
                     apple.scale=0.08;
                    }
                   

                      function createLeaf(){
                        leaf=createSprite(random(50,350),40,10,10);
                        leaf.addImage(leafImg2)
                        leaf.velocityY=2;
                        leaf.scale=0.08
                      }
                    
