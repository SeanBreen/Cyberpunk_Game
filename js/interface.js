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

//Button Array
var menuButtons = [];
menuButtons[0] = new Button([10,130],"Houses",80,30,0);
menuButtons[1] = new Button([110,130],"Roads",80,30,0);
menuButtons[2] = new Button([210,130],"Power",80,30,0);


//Draw highlight for button
function drawHighlights() {
  for (i=0;i<menuButtons.length;i++) {
    //Check bounding box for the buttons
    if (mouse[0] >= menuButtons[i].pos[0] && mouse[0] <= (menuButtons[i].pos[0]+menuButtons[i].width) && mouse[1] >= menuButtons[i].pos[1] && mouse[1] <= (menuButtons[i].pos[1]+menuButtons[i].height+8)) {
      //Change colour of the text
      menuButtons[i].style[3] = "#3fbfe2";
      activeSubMenu = i;
    }
    else {
      menuButtons[i].style[3] = "#fff";
    }
  }
}

//Sub menu item constructor
var subMenuItem = function(text,type,menu) {
  this.pos = [0,0];
  this.text = text;
  this.style = [17,"Orbitron","rgba(0,0,0,0.2)","#fff"];
  this.width = 250;
  this.height = 100;
  this.menu = menu;

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
  }
}

var subMenuItems = [];
subMenuItems[0] = new subMenuItem("item1",1,0);
subMenuItems[1] = new subMenuItem("item2",1,0);
subMenuItems[2] = new subMenuItem("item3",1,1);

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
