class Chain{
constructor(bodyA,bodyB){
var Options = {
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.01,
length:10,



}
this.chain = Matter.Constraint.create(Options)
World.add(world,this.chain)











}
Display() {
    stroke("red")
strokeWeight(3)
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)



}







}