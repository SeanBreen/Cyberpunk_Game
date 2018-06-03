//Functionality to deal with the click event
function click() {
  //If the click event is not on a button
  if (!checkClickButtons()) {
    //If the player isn't holding anything (eg having just clicked on a building)
    if (player.holding != 0) {

    }
  }
}

function checkClickButtons() {
  for (i=0;i<subMenuButtons.length;i++) {
    //Check bounding box for the buttons and make sure the one clicked is in the active menu and also if it is within the player's budget
    if (mouse[0] >= subMenuButtons[i].pos[0] && mouse[0] <= (subMenuButtons[i].pos[0]+subMenuButtons[i].width) && mouse[1] >= subMenuButtons[i].pos[1] && mouse[1] <= (subMenuButtons[i].pos[1]+subMenuButtons[i].height) && subMenuButtons[i].menu == activeSubMenu && canBuy(subMenuItems[subMenuButtons[i].subMenu].price)) {
      player.holding = [subMenuItems[subMenuButtons[i].subMenu].price,subMenuItems[subMenuButtons[i].subMenu].objName[0],subMenuItems[subMenuButtons[i].subMenu].objName[1]];
      player.image.src = "assets/"+getTextureName(player.holding[1],player.holding[2])+".png";
    }
  }

  //If within grid, tile isn't locked and no building on it
  if (withinGrid() && getCurrentTile()[0] != 0 && getCurrentTile()[1] == undefined) { //
    var structure = 0;
    if (player.holding[2] == "r") {
      structure = new Road(getTextureName(player.holding[1],"r"));
      structure.type = 1;
    }
    if (player.holding[2] == "b") {
      structure = new Building(getTextureName(player.holding[1],"b"));
      generateFamily(getArrayPosFromMouse());
      updatePopulation();
    }
    if (player.holding[2] == "p") {
      structure = new Power(getTextureName(player.holding[1],"p"));
    }
    changeArrayValue(getArrayPosFromMouse(),structure,player.holding[2]);

    mergeRoad();
    player.money -= player.holding[0];
    player.holding = [0,0,0];
    player.image.src = "";
  }

  //Check if user is clicking on speed controls
  for (i=0;i<speedControlButtons.length;i++) {
    if (mouse[0] >= speedControlButtons[i].pos[0] && mouse[0] <= (speedControlButtons[i].pos[0]+speedControlButtons[i].width) && mouse[1] >= speedControlButtons[i].pos[1] && mouse[1] <= (speedControlButtons[i].pos[1]+speedControlButtons[i].height)) {
      //Set the time speed modifier equal to the value of the button clicked minus the X at the end eg 10x becomes 10
      timeSpeedModifier = speedControlButtons[i].text.slice(0,-1);
      //Toggle the active time control button to off
      for (j=0;j<speedControlButtons.length;j++) {
        speedControlButtons[j].active = false;
      }
      speedControlButtons[i].active = true;
    }
  }
}
