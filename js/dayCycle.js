var worldYears = 0;
var worldMonths = 0;
var worldDays = 0;
var worldHours = 0;
var worldMinutes = 0;
var displayHours = 0;
var displayMinutes = 0;

//Update all the time variables
function checkIncrementTime() {
  if (worldMinutes >=60) {
    worldHours++;
    worldMinutes = 0;
  }
  if (worldHours >= 24) {
    worldDays++;
    worldHours = 0;
  }
  if (worldDays >= 31) {
    worldMonths++;
    worldDays = 0;
  }
  if (worldMonths >=12) {
    worldYears++;
    worldMonths = 0;
  }
  setDisplayTime();
}

//Set the display time for the clock at the top of the page
function setDisplayTime() {
  if (worldMinutes < 10) {
    displayMinutes = "0"+parseInt(worldMinutes);
  } else {
    displayMinutes = parseInt(worldMinutes);
  }
  if (worldHours < 10) {
    displayHours = "0"+worldHours;
  } else {
    displayHours = worldHours;
  }
}

//Draws translucent a box over grid to signify the time of day
function drawNightBox() {
  var alpha = 0;
  if (worldHours >= 19) {
    alpha = (((24-worldHours)-5)*-1)/10;
    ctx.fillStyle = "rgba(0,0,120,"+alpha+")";
    ctx.fillRect(initialStartX,initialStartY,tileSize*10,tileSize*10);
  }
}
