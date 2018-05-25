var worldYears = 0;
var worldMonths = 1;
var worldWeeks = 0;
var w1 = false;
var w2 = false;
var w3 = false;
var w4 = false;
var worldDays = 1;
var worldHours = 0;
var worldMinutes = 0;
var displayYears = 0;
var displayMonths = 0;
var displayDays = 0;
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
  //Increment the weeks for every week in the month
  if (worldDays == 7 && !w1) {
    worldWeeks++;
    w1 = true;
    //Collect income for this week
    collectWeeklyIncome();
  }
  if (worldDays == 14 && !w2) {
    worldWeeks++;
    w2 = true;
    //Collect income for this week
    collectWeeklyIncome();
  }
  if (worldDays == 21 && !w3) {
    worldWeeks++;
    w3 = true;
    //Collect income for this week
    collectWeeklyIncome();
  }
  if (worldDays >= 28 && !w4) {
    worldWeeks++;
    w4 = true;
    //Collect income for this week
    collectWeeklyIncome();
  }
  if (worldWeeks >= 4) {
    console.log("weeks");
    worldMonths++;
    worldWeeks = 0;
    worldDays = 1;
    w1 = false;
    w2 = false;
    w3 = false;
    w4 = false;
    //Collect income for this month
    collectMonthlyIncome();
  }
  if (worldMonths >12) {
    worldYears++;
    worldMonths = 1;
  }
  setDisplayTime();
  setDisplayDate();
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

//Set the display date for the date box
function setDisplayDate() {
  if (worldDays < 10) {
    displayDays = "0"+worldDays;
  } else {
    displayDays = worldDays;
  }
  if (worldMonths < 10) {
    displayMonths = "0"+worldMonths;
  } else {
    displayMonths = worldMonths;
  }
  displayYears = worldYears+2200;
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
