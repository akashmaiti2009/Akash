class paper
{
constructor(x,y,r)
{
    var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}
    this.r=r

    this.image=loadImage("paper.png")
    this.body=Bodies.circle(x,y,r,ball_options)
}  // World.add(world, this.Body)
show()
{
  var pos = this.body.position;

  push()
  translate(pos.x,pos.y);
  rectMode(CENTER)
  fill(225)
  imageMode()
  image(this.image,0,0,2*this.r,2*this.r)
  pop()
}
}