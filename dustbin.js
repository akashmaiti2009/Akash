class Dustbin
{
   constructor(x,y)
    {
        var options={
            isStatic:true,
            restitution:0.3,
            density:0.4
        }

    this.leftside=Bodies.rectangle()
    this.rightside=Bodies.rectangle()
    this.centerside=Bodies.rectangle()
    this.image=loadimage("dustbin.png")

    }
 display()
 {

   push()
   rectMode(CENTER)

   fill(225)
  imageMode(CENTER)

  image(this.image,this.centerbody.position.x,this.centerbody.position.y,-50,100,100)
  rect(this.leftbody.postion.x,this.leftside.postion.y,100,20)
  rect(this.rightside.postion.x,this.rightside.postion.y,20,100)
  rect(this.centerside.postion.x,this.centerside.postion.y,20,100)
  pop()

 }
}