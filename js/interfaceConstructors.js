//Draws the menu interface
//Refactor to be OO, with buttons as an item inside each menu object
//If done like this, can do transitions where text moves in/out depending on this.width
var activeSubMenu = 0;

function drawMenu() {
  ctx.fillStyle="rgba(23,23,23,0.8)";
  ctx.fillRect(0,50,300,800);
  ctx.fillStyle = "#fff";
  ctx.font = "30px Orbitron";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Building",150,90);
  //Houses
  for (i=0;i<menuButtons.length;i++) {
    menuButtons[i].draw();
  }
  drawHighlights();
  drawActiveSubMenu(activeSubMenu);
}


//Button creator
var Button = function(pos,text,width,height,type) {
  this.pos = pos;
  this.text = text;
  this.style = [17,"Orbitron","rgba(0,0,0,1)","#fff"];
  this.width = width;
  this.height = height;

  this.draw = function() {
    ctx.font = this.style[0]+"px "+this.style[1];
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    if (type == 0) {
      ctx.fillStyle = this.style[3];
      ctx.fillText(this.text,this.pos[0],this.pos[1]);
    } else {
      ctx.fillStyle = this.style[2]
      ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height);
      ctx.fillStyle = this.style[3];
      ctx.fillText(this.text,this.pos[0]+(this.width/2),this.pos[1]+(this.height/2));
    }
    ctx.fillRect(this.pos[0],this.pos[1]+this.height+5,this.width,3);
  }
}
//SubMenu button creator
var SubMenuButton = function(pos,text,width,height,type,subMenu) {
  this.pos = pos;
  this.text = text;
  this.style = [15,"Orbitron","#3fbfe2","#fff"];
  this.width = width;
  this.height = height;
  this.subMenu = subMenu;

  this.draw = function() {
    ctx.font = this.style[0]+"px "+this.style[1];
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    if (type == 0) {
      ctx.fillStyle = this.style[3];
      ctx.fillText(this.text,this.pos[0],this.pos[1]);
    } else {
      ctx.fillStyle = this.style[2]
      ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height);
      ctx.fillStyle = this.style[3];
      ctx.fillText(this.text,this.pos[0]+5,this.pos[1]+(this.height/2));
    }
  }
}


//Draw highlight for button
function drawHighlights() {
  for (i=0;i<menuButtons.length;i++) {
    //Check bounding box for the buttons - could implementing a quadtree make this faster in a larger application?
    if (mouse[0] >= menuButtons[i].pos[0] && mouse[0] <= (menuButtons[i].pos[0]+menuButtons[i].width) && mouse[1] >= menuButtons[i].pos[1] && mouse[1] <= (menuButtons[i].pos[1]+menuButtons[i].height+8)) {
      //Change colour of the text
      menuButtons[i].style[3] = "#3fbfe2";
      activeSubMenu = i;
    }
    else {
      menuButtons[i].style[3] = "#fff";
    }
  }
  for (i=0;i<subMenuButtons.length;i++) {
    //Check bounding box for the buttons - could implementing a quadtree make this faster in a larger application?
    if (mouse[0] >= subMenuButtons[i].pos[0] && mouse[0] <= (subMenuButtons[i].pos[0]+subMenuButtons[i].width) && mouse[1] >= subMenuButtons[i].pos[1] && mouse[1] <= (subMenuButtons[i].pos[1]+subMenuButtons[i].height)) {
      //Change colour of the text
      subMenuButtons[i].style[2] = "#f442e8";
    }
    else {
      subMenuButtons[i].style[2] = "#3fbfe2";
    }
  }
}

//Sub menu item constructor
var subMenuItem = function(name,text,price,menu,imageSrc) {
  this.pos = [0,0];
  this.name = name;
  this.text = text;
  this.price = price;
  this.style = [20,"Orbitron","rgba(0,0,0,0.2)","#fff","#ccc",15];
  this.width = 250;
  this.height = 100;
  this.menu = menu;
  this.image = new Image();
  this.subMenuButton;
  if (imageSrc == "" || imageSrc == null) {
    this.image.src = "assets/level/tile.png";
  } else {
    this.image.src = "assets/"+imageSrc+".png";
  }

  this.draw = function() {
    //Draw background
    ctx.fillStyle = this.style[2]
    ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height);
    //Draw Square image icon
    ctx.drawImage(this.image,this.pos[0],this.pos[1],this.height,this.height);
    //Write name
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.fillStyle = this.style[3];
    ctx.font = this.style[0]+"px "+this.style[1];
    ctx.fillText(this.name,this.width,this.pos[1]+5);
    //Write label text
    ctx.fillStyle = this.style[4];
    ctx.font = this.style[5]+"px "+this.style[1];
    ctx.fillText(this.text,this.width,this.pos[1]+this.style[0]+10);
    //Draw button
    subMenuButtons[this.subMenuButton].pos = [this.width-subMenuButtons[this.subMenuButton].width,(this.height/2)+this.pos[1]+5];
    subMenuButtons[this.subMenuButton].text = "Buy: "+this.price;
    subMenuButtons[this.subMenuButton].draw();
  }
}


function drawActiveSubMenu(menu) {
  var startX = 10;
  var startY = 200;
  for (i=0;i<subMenuItems.length;i++) {
    if (subMenuItems[i].menu == menu) {
      subMenuItems[i].pos = [startX,startY];
      subMenuItems[i].draw();
      startY+=120;
    }
  }
}
