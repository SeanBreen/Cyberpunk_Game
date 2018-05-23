function update(progress) {
  // Update the state of the world for the elapsed time since last render
  worldMinutes+=(progress/1000)*timeSpeedModifier;
  checkIncrementTime();
  //console.log("Years:"+worldYears+" Months:"+worldMonths+" Days:"+worldDays+" Hours:"+worldHours+" Minutes:"+worldMinutes);
}

function draw() {
  //Clear screen of leftover sprites
  clearScreen();
  //Draw everything
  drawLevel(level);
  drawRoads(roads);
  drawBuildings(buildings);
  drawNightBox();
  drawMenu();
  drawPlayer();
}

function loop(timestamp) {
  var progress = timestamp - lastRender;

  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}
var lastRender = 0;
window.requestAnimationFrame(loop);
