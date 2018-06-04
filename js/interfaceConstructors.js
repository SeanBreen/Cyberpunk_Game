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
  drawBalanceBox();
  drawDate();
  drawWorldtime();
  drawSpeedControl();
  drawPopulationMenu();
  drawHouseHover();
}


//Button creator
var Button = function(pos,text,width,height,type) {
  this.pos = pos;
  this.text = text;
  this.style = [17,"Orbitron","rgba(0,0,0,1)","#fff"];
  this.width = width;
  this.height = height;
  this.active = false;

  this.draw = function() {
    ctx.font = this.style[0]+"px "+this.style[1];
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    if (type == 0) {
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillStyle = this.style[3];
      ctx.fillText(this.text,this.pos[0],this.pos[1]);
    } else {
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = this.style[2]
      ctx.fillRect(this.pos[0],this.pos[1],this.width,this.height);
      ctx.fillStyle = this.style[3];
      ctx.fillText(this.text,this.pos[0]+(this.width/2),this.pos[1]+(this.height/2));
    }
    ctx.fillRect(this.pos[0],this.pos[1]+this.height+5,this.width,3);
  }
}
//SubMenu button creator
var SubMenuButton = function(pos,text,width,height,type,menu,subMenu) {
  this.pos = pos;
  this.text = text;
  this.style = [15,"Orbitron","#3fbfe2","#fff"];
  this.width = width;
  this.height = height;
  this.menu = menu;
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
    if (mouse[0] >= menuButtons[i].pos[0] && mouse[0] <= (menuButtons[i].pos[0]+menuButtons[i].width) && mouse[1] >= menuButtons[i].pos[1] && mouse[1] <= (menuButtons[i].pos[1]+menuButtons[i].height+8) || menuButtons[i].active) {
      //Change colour of the text
      menuButtons[i].style[3] = "#3fbfe2";
      activeSubMenu = i;
      //Reset active for all buttons in main menu
      for (j=0;j<menuButtons.length;j++) {
        menuButtons[j].active = false;
      }
      //Make current button active (highlighted)
      menuButtons[i].active = true;
    } else {
      menuButtons[i].style[3] = "#fff";
      menuButtons[i].active = false;
    }
  }
  for (i=0;i<subMenuButtons.length;i++) {
    //Check bounding box for the buttons - could implementing a quadtree make this faster in a larger application?
    if (mouse[0] >= subMenuButtons[i].pos[0] && mouse[0] <= (subMenuButtons[i].pos[0]+subMenuButtons[i].width) && mouse[1] >= subMenuButtons[i].pos[1] && mouse[1] <= (subMenuButtons[i].pos[1]+subMenuButtons[i].height)) {
      //Change colour of the text
      subMenuButtons[i].style[2] = "#f442e8";
    } else {
      subMenuButtons[i].style[2] = "#3fbfe2";
    }
  }
  for (i=0;i<speedControlButtons.length;i++) {
    //Check bounding box for the buttons and all active speed control buttons
    if (mouse[0] >= speedControlButtons[i].pos[0] && mouse[0] <= (speedControlButtons[i].pos[0]+speedControlButtons[i].width) && mouse[1] >= speedControlButtons[i].pos[1] && mouse[1] <= (speedControlButtons[i].pos[1]+speedControlButtons[i].height) || speedControlButtons[i].active) {
      //Change colour of the button
      speedControlButtons[i].style[2] = "#f442e8";
    } else {
      speedControlButtons[i].style[2] = "#3fbfe2";
    }
  }
}

//Sub menu item constructor
var subMenuItem = function(name,text,price,menu,objName,imageSrc) {
  this.pos = [0,0];
  this.name = name;
  this.text = text;
  this.price = price;
  this.style = [20,"Orbitron","rgba(0,0,0,0.2)","#fff","#ccc",15];
  this.width = 250;
  this.height = 100;
  this.menu = menu;
  this.objName = objName;

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

//Draw balance box
function drawBalanceBox() {
  ctx.fillStyle="rgba(23,23,23,0.8)";
  ctx.fillRect((window.innerWidth/2)-200,window.innerHeight-50,400,100);
  ctx.fillStyle = "#fff";
  ctx.font = "30px Orbitron";
  ctx.fillText("Balance: "+player.money+" credits",(window.innerWidth/2)-190,window.innerHeight-25);
}

//Draw date box
function drawDate() {
  ctx.fillStyle = "#f442e8";
  ctx.fillRect((window.innerWidth/2)-320,0,220,50);
  ctx.fillStyle = "#fff";
  ctx.textAlign="center";
  ctx.font = "30px PT Mono";
  ctx.fillText(displayDays+"/"+displayMonths+"/"+displayYears,(window.innerWidth/2)-210,25);
}

//Draw world time
function drawWorldtime() {
  ctx.fillStyle = "#f442e8";
  ctx.fillRect((window.innerWidth/2)-60,0,120,50);
  ctx.fillStyle = "#fff";
  ctx.textAlign="center";
  ctx.font = "30px PT Mono";
  ctx.fillText(displayHours+":"+displayMinutes,(window.innerWidth/2),25);
}

//Draw speed up time interface
var timeSpeedModifier = 1;
function drawSpeedControl() {
  var x = window.innerWidth/2+100;
  for (i=0;i<speedControlButtons.length;i++) {
    speedControlButtons[i].pos = [x,0];
    speedControlButtons[i].draw();
    x+=speedControlButtons[i].width+5;
  }
}

//Hover box for houses
function drawHouseHover() {
    if (withinGrid() && getCurrentTile()[2] != 0 && player.holding[0] == 0) {
      var startX = (window.innerWidth/2)+100;
      var startY = window.innerHeight/2;

      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(mouse[0],mouse[1]);
      ctx.lineTo(startX,startY);
      ctx.stroke();
      ctx.fillStyle = "rgba(244,66,232,0.8)";
      ctx.fillRect(startX,startY,250,180);
      ctx.strokeRect(startX,startY,250,180);
      ctx.fillStyle = "#fff";

      var family = 0;

      //Search through family array for the family living in this tile
      for (i=0;i<families.length;i++) {
        if (families[i]["home"] == getArrayPosFromMouse()) {
          family = families[i];
          break;
        }
      }
      //Draw the name at the top of the box
      ctx.textAlign = "right";
      ctx.font = "30px Orbitron";
      startY+=25;
      ctx.fillText(family["surname"],startX+240,startY);
      //Draw the white underline
      startX+=20;
      startY+=15;
      ctx.fillRect(startX,startY,220,5);
      //Draw the number of adults and children
      startX = (window.innerWidth/2)+340;
      ctx.font = "20px Orbitron";
      startY+=30;
      ctx.fillText("Adults: "+family["adults"].length+" Kids: "+family["children"].length,startX,startY);

      startY+=30;
      //Combine the happiness level of every family member
      var familyHappiness = 0;
      var noFamilyMembers = 0;
      for (i=0;i<family["adults"].length;i++) {
        familyHappiness+=family["adults"][i].happiness;
        noFamilyMembers++;
      }
      for (i=0;i<family["children"].length;i++) {
        familyHappiness+=family["children"][i].happiness;
        noFamilyMembers++;
      }
      //Draw the happiness bar for the family
      ctx.fillText("Happiness",startX,startY);
      startY+=20;
      ctx.fillStyle = "#c132b8";
      ctx.fillRect(startX-220,startY,220,30);
      ctx.fillStyle = "#3fbfe2";
      var happinessLength = (familyHappiness/noFamilyMembers)*220;
      ctx.fillRect(startX-220,startY,happinessLength,30);
    }
}

//Menu for population info
function drawPopulationMenu() {
  var startX = window.innerWidth-280;
  var startY = 90;
  ctx.fillStyle="rgba(23,23,23,0.8)";
  ctx.fillRect(window.innerWidth-300,50,300,800);
  ctx.fillStyle="#fff";
  ctx.textAlign = "center";
  ctx.font = "30px Orbitron";
  ctx.fillText("Families",window.innerWidth-150,startY);

  startY+=40;
  ctx.textAlign="left";
  ctx.font = "20px Orbitron";

    for (i=0;i<families.length;i++) {
        ctx.fillText(families[i]["surname"],startX,startY);
        startY+=30;
    }
}

//To indicate a house needs power, this draws a symbol above it
function drawBuildingPowerSymbol(pos) {
  buildings[pos].drawPowerSymbol();
}
