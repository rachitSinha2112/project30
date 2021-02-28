class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 20
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA=null;
}
attach(body){
   this.sling.bodyA = body;
}

    display(){
        if( this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(10);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
