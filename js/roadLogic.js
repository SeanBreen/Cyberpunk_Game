//Go through entire road structure and replace roads with intersections where necessary
function mergeRoad(pos) {
  var connections = 0;
  for (i=0;i<roads.length;i++) {
    var up = false;
    var right = false;
    var down = false;
    var left = false;
    // console.log("array position: "+i)
    if (getRoad("up",i) > 0) { up = true; connections++; }
    if (getRoad("right",i) > 0) { right = true; connections++; }
    if (getRoad("down",i) > 0) { down = true; connections++; }
    if (getRoad("left",i) > 0) { left = true; connections++; }
    if (connections > 0 && roads[i][0] > 0) {
      // console.log("connections:"+connections);
      // console.log("updating road section at "+i);
      var rotation = 0;
      switch(connections) {
        case 1:
          if (up) {
            rotation = 90;
          } else if (right) {
            rotation = 180;
          } else if (down) {
            rotation = 270;
          } else if (left) {
            rotation = 0;
          }
          roads[i][0] = 1;
          roads[i][1] = rotation;
          break;
        case 2:
          if (up && right) {
            rotation = 90;
            roads[i][0] = 5;
          } else if (right && down) {
            rotation = 180;
            roads[i][0] = 5;
          } else if (left && down) {
            rotation = 270;
            roads[i][0] = 5;
          } else if (left && up) {
            rotation = 0;
            roads[i][0] = 5;
          } else if (up && down) {
            rotation = 0;
            roads[i][0] = 2;
          } else if (left && right) {
            rotation = 90;
            roads[i][0] = 2;
          }
          roads[i][1] = rotation;
          break;
        case 3:
          if (up && right && down) {
            rotation = 90;
          } else if (right && down && left) {
            rotation = 180;
          } else if (down && left && up) {
            rotation = 270;
          } else if (up && left && right) {
            rotation = 0;
          }
          roads[i][0] = 3;
          roads[i][1] = rotation;
          break;
        case 4:
          roads[i][0] = 4;
          roads[i][1] = 0;
          break;
      }

      console.log(connections);
    }
    connections = 0;
  }
}
