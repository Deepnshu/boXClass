class Ball{
constructor(x,y,w,h){
var options={
restitution:1


}
this.body = Bodies.rectangle(x,y,w,h,options);
this.width =w;
this.height = h;
World.add(world,this.body)


}

display(){
var pos=this.body.position
ellipseMode(RADIUS)
fill("blue");
ellipse(pos.x,pos.y,this.width,this.height);



}
}