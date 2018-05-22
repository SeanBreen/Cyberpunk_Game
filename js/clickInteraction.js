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
  // for (i=0;i<menuButtons.length;i++) {
  //   //Check bounding box for the buttons - could implementing a quadtree make this faster in a larger application?
  //   if (mouse[0] >= menuButtons[i].pos[0] && mouse[0] <= (menuButtons[i].pos[0]+menuButtons[i].width) && mouse[1] >= menuButtons[i].pos[1] && mouse[1] <= (menuButtons[i].pos[1]+menuButtons[i].height+8)) {
  //     return true;
  //   }
  // }
  for (i=0;i<subMenuButtons.length;i++) {
    //Check bounding box for the buttons and make sure the one clicked is in the active menu
    if (mouse[0] >= subMenuButtons[i].pos[0] && mouse[0] <= (subMenuButtons[i].pos[0]+subMenuButtons[i].width) && mouse[1] >= subMenuButtons[i].pos[1] && mouse[1] <= (subMenuButtons[i].pos[1]+subMenuButtons[i].height) && subMenuButtons[i].menu == activeSubMenu) {

      player.holdingCost = subMenuItems[subMenuButtons[i].subMenu].cost;
      player.image.src = "assets/"+getTextureName(subMenuItems[subMenuButtons[i].subMenu].objName[0],subMenuItems[subMenuButtons[i].subMenu].objName[1])+".png";
      //player.money -= subMenuItems[subMenuButtons[i].subMenu].cost;
    } else {
      if (withinGrid() && getCurrentTile()[0] != 0) {
        player.money -= player.holdingCost;
        //TODO reset only if right click
        player.holdingCost = 0;
        player.image.src = "";
      } else {
      }
    }
  }
}
