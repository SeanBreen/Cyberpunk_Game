var Sprite = function(filename) {
  this.image = null;
  this.pos=[0,0];
  this.speed=0;
  if (filename != "" && filename != undefined && filename != null){
    filename = "assets/"+filename;
    this.image = new Image();
    this.image.src = filename+".PNG";
  } else {
    console.log("Could not create Sprite, filename invalid. Name:"+filename);
  }

  this.draw = function(x,y,w,h){
    if (w === undefined || h === undefined){
      ctx.drawImage(this.image,x,y,this.image.width,this.image.height);
    } else {
      ctx.drawImage(this.image,x,y,w,h);
    }
  }
};
