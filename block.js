class Block{
    constructor(x,y){
        var options={
            firction:0.1,
            density:0.1
        }
        this.body=Matter.Bodies.rectangle(x,y,50,70,options);
       this.visibility=255
       this.width=width;
       this.height=height;   
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        rectMode(CENTER) 
        fill("pink");
        strokeWeight(2);
        stroke("red");

        rect(pos.x,pos.y,this.width,this.height);


        if(this.body.speed<3){
            
              }
              else{
                push();
                this.visibility=this.visibility-5;
                tint(255,this.visibility)
                rect(this.body.position.x,this.body.position.y,this.width,this.height);
                World.remove(world,this.body)
            pop();
              }
        

    }
}