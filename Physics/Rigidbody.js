class Rigidbody{
  constructor(){
    this.Pos = new Vec2(0,0);
    this.Vel = new Vec2(0,0);
    this.Acc = new Vec2(0,0);
  }

  get Position(){
    return [this.Pos.X,this.Pos.Y];
  }

  set Position(pos){
    this.Pos = pos;
  }

  get Velocity(){
    return [this.Vel.X,this.Vel.Y];
  }

  set Velocity(vel){
    this.Vel = vel;
  }

  get Acceleration(){
    return [this.Acc.X,this.Acc.Y];
  }

  set Acceleration(acc){
    this.Acc = acc;
  }

  Update(){
    /*Simple euler integration goes here*/
    console.log("updating rigid");
  }
}

class NoRigidbody extends Rigidbody{
  Update(){
    console.log("Not updating rigid");
  }
}
