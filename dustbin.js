class Dustbin{
    constructor(x,y)
    {
        
        this.x=x;
         this.y=y; 
         this.dustbinWidth=200
         this.dustbinHeight=213
         this.wallThickness=20
        

 this.bottombody=Bodies.rectangle(this.x, this.y, this.dustbinWidth,this.wallThickness,{isStatic:true})
 this.leftwallbody=Bodies.rectangle(this.x- this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
 this.rightwallbody=Bodies.rectangle(this.x+ this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
this.image=loadImage("dustbingreen.png")
World.add(world,this.bottombody);
World.add(world,this.leftwallbody);
World.add(world,this.rightwallbody);
    }
          display()
          {
              var posbottom=this.bottombody.position;
              var posleft=this.leftwallbody.position;
              var posright=this.rightwallbody.position;
             push();
              translate(posleft.x,posleft.y);
              rectMode(CENTER)
              // strokeWeight(3);
              angleMode(RADIANS)
                fill(255)
                stroke(255)
                rotate(this.angle)
                 //rect(0,0,this.wallThickness, this.dustbinHeight);
                  pop();


                  push();
                  translate(posright.x,posright.y);
                  rectMode(CENTER)
                  // strokeWeight(3);
                  angleMode(RADIANS)
                    fill(255)
                    stroke(255)
                    rotate(-1*this.angle)
                    // rect(0,0,this.wallThickness, this.dustbinHeight);
                      pop();

                      push();
                      translate(posbottom.x,posbottom.y);
                      rectMode(CENTER)
                      // strokeWeight(3);
                      angleMode(RADIANS)
                      fill(255)
                      imageMode(CENTER)
                   //  rotate(this.angle)
                        image(this.image,0, -this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
                          pop();
                 
    } 
}

