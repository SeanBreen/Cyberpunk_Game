class Sprite {
  constructor(filename) {
    this.image = null;
    this.pos=[0,0];
    this.filename = filename;
    if (this.filename != "" && this.filename != undefined && this.filename != null){
      this.image = new Image();
      this.image.src = "assets/"+this.filename+".PNG";
    } else {
      console.log("Could not create Sprite, filename invalid. Name:"+filename);
    }
  }

  draw(x,y,w,h,r){
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
}

class Tile extends Sprite {
  constructor(filename) {
    super(filename);
    this.type = 0;
  }

  activateDrawPurchase() {
    drawBuyTile(this.pos);
  }

  buyTile() {
    this.image.src = "assets/level/unlocked.PNG";
  }
}

class Building extends Sprite {
  constructor(filename) {
    super(filename);
    this.powered = false;
    this.profit = 0;
    this.image.src = "assets/"+this.filename+"NoPower.PNG";
    this.lightning = new Image();
    this.lightning.src = "assets/sprites/icons/powerBolt.PNG";
    this.profitImg = new Image();
    this.profitImg.src = "assets/sprites/icons/moneyPlus.PNG";
    this.alpha = 1;
  }

  turnOn() {
    this.powered = true;
    this.image.src = "assets/"+this.filename+".PNG";
  }

  turnOff() {
    this.powered = false;
    this.image.src = "assets/"+this.filename+"NoPower.PNG";
  }

  drawPowerSymbol() {
    if (!this.powered) {
      ctx.drawImage(this.lightning,this.pos[0]+5,this.pos[1]-this.image.height+50,this.lightning.width,this.lightning.height/1.75);
    }
  }

  drawProfit() {
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.profitImg,this.pos[0]+7,this.profitImgPos,this.profitImg.width,this.profitImg.height);
    ctx.globalAlpha = 1;
  }

  resetAlpha() {
    this.alpha = 1;
  }

}

class Road extends Sprite {
  constructor(filename) {
    super(filename);
    this.type = 0;
    this.rotation = 0;
  }

  changeImgSrc(no) {
    var file = getTextureName(no,"r");
    this.image.src = "assets/"+file+".PNG";
  }
}

class Power extends Sprite {
  constructor(filename) {
    super(filename);
    this.type = 0;
    this.profit = 0;
    this.profitImg = new Image();
    this.profitImg.src = "assets/sprites/icons/moneyMinus.PNG";
    this.profitImgPos = this.pos[1]-this.profitImg.height;
    this.alpha = 1;
  }

  drawProfit() {
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.profitImg,this.pos[0]+7,this.profitImgPos,this.profitImg.width,this.profitImg.height);
    ctx.globalAlpha = 1;
  }

  resetAlpha() {
    this.alpha = 1;
  }

}
