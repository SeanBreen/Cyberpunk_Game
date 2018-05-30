var Sprite = function(filename) {
  this.image = null;
  this.pos=[0,0];
  if (filename != "" && filename != undefined && filename != null){
    filename = "assets/"+filename;
    this.image = new Image();
    this.image.src = filename+".PNG";
  } else {
    console.log("Could not create Sprite, filename invalid. Name:"+filename);
  }

  this.draw = function(x,y,w,h,r){
    if (w === undefined || h === undefined){
      ctx.drawImage(this.image,x,y,this.image.width,this.image.height);
    } else if (r == 0 || r === undefined) {
      ctx.drawImage(this.image,x,y,w,h);
    } else {
      ctx.save();
      ctx.translate(x+tileSize/2, y+tileSize/2);
      ctx.rotate(r*(Math.PI/180));
      if (r == 90 || r == 180) {
        x=x*Math.cos(r*(Math.PI/180)) - y*Math.sin(r*(Math.PI/180));
      }
      if (r == 180 || r == 270) {
        y=y*Math.cos(r*(Math.PI/180)) - x*Math.sin(r*(Math.PI/180));
      }
      ctx.drawImage(this.image,-tileSize/2,-tileSize/2,w,h);
      ctx.restore();
    }
  }
};
