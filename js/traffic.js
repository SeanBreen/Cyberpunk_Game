//Data structure to hold vehicles
var vehicles = [];

//Draw the vehicles and check they're within the grid space
function drawVehicles() {
  for (i=0;i<vehicles.length;i++) {
    //Left side, right side+image width, top side, bottom side
    if (vehicles[i][0].pos[0] >= (window.innerWidth/2)-(10*tileSize)/2 && vehicles[i][0].pos[0] <= (window.innerWidth/2)+(10*tileSize)/2-vehicles[i][0].image.width*2 && vehicles[i][0].pos[1] >= (window.innerHeight/2)-(10*tileSize)/2 && vehicles[i][0].pos[1] <= (window.innerHeight/2)+(10*tileSize)/2) {
      vehicles[i][0].draw(vehicles[i][0].pos[0],vehicles[i][0].pos[1],vehicles[i][0].image.width*2,vehicles[i][0].image.height*2);
    } else {
      //If it's outside the grid space, remove it from the array
      vehicles.splice(i,1);
    }
  }
  //Create a car if this random number generator condition is true
  if (Math.random()*1 > 0.999) {
    createVehicle();
  }
  //The movement for the vehicles
  moveVehicles();
}

//Function that creates a vehicle with a randomised texture
function createVehicle() {
  var vehicleAssets = ["tempCar"];
  var randomAssetNo = Math.floor(Math.random()*vehicleAssets.length);
  var v = [new Sprite("/sprites/vehicles/"+vehicleAssets[randomAssetNo]),"right"];
  v[0].pos[0]= (window.innerWidth/2)-(10*tileSize)/2+(0*tileSize);
  v[0].pos[1]= (window.innerHeight/2)-(10*tileSize)/2+(6*tileSize);
  vehicles[vehicles.length] = v;
}

function moveVehicles() {
  for (i=0;i<vehicles.length;i++) {
    var currentDirection = vehicles[i][1];
    movementSpeed = 0.5*timeSpeedModifier;
    if (currentDirection == "up") {
      vehicles[i][0].pos[1]-=movementSpeed;
    } else if (currentDirection == "right") {
      vehicles[i][0].pos[0]+=movementSpeed;
    } else if (currentDirection == "down") {
      vehicles[i][0].pos[1]+=movementSpeed;
    } else if (currentDirection == "left") {
      vehicles[i][0].pos[0]-=movementSpeed;
    }
  }
}




function changeVehicleDirection() {
  // if (getRoad("up",i) > 0 && (Math.floor(Math.random()*2)) == 1) {
  //   direction = "up";
  // }
  // else if (getRoad("right",i) > 0 && (Math.floor(Math.random()*2)) == 1) {
  //   direction = "right";
  // }
  // if (getRoad("down",i) > 0 && (Math.floor(Math.random()*2)) == 1) {
  //   direction = "down";
  // }
  // if (getRoad("left",i) > 0 && (Math.floor(Math.random()*2)) == 1) {
  //   direction = "left";
  // }
  var directions = [];
  if (getRoad("up") != 0) {
    directions.push("up");
  }
  if (getRoad("right") != 0) {
    directions.push("right");
  }
  if (getRoad("down") != 0) {
    directions.push("down");
  }
  if (getRoad("left") != 0 ) {
    directions.push("left");
  }
}
