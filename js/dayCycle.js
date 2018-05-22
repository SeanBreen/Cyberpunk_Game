var worldTime = 2322;

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
