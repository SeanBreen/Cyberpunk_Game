//Go through entire road structure and replace roads with intersections where necessary
function mergeRoad(pos) {
  var connections = 0;
  for (i=0;i<roads.length;i++) {
    var up = false;
    var right = false;
    var down = false;
    var left = false;
    // console.log("array position: "+i)

    if (roads[i] != 0) {
      if (getRoad("up",i)) { up = true; connections++; }
      if (getRoad("right",i)) { right = true; connections++; }
      if (getRoad("down",i)) { down = true; connections++; }
      if (getRoad("left",i)) { left = true; connections++; }
      // console.log("connections:"+connections);
      // console.log("updating road section at "+i);
      if (connections > 0) {
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
            roads[i].changeImgSrc(1);
            roads[i].rotation = rotation;
            break;
          case 2:
            if (up && right) {
              rotation = 90;
              roads[i].changeImgSrc(5);
            } else if (right && down) {
              rotation = 180;
              roads[i].changeImgSrc(5);
            } else if (left && down) {
              rotation = 270;
              roads[i].changeImgSrc(5);
            } else if (left && up) {
              rotation = 0;
              roads[i].changeImgSrc(5);
            } else if (up && down) {
              rotation = 90;
              roads[i].changeImgSrc(2);
            } else if (left && right) {
              rotation = 0;
              roads[i].changeImgSrc(2);
            }
            roads[i].rotation = rotation;
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
            roads[i].changeImgSrc(3);
            roads[i].rotation = rotation;
            break;
          case 4:
            roads[i].changeImgSrc(4);
            roads[i].rotation = 0;
            break;
          default:
            roads[i].changeImgSrc(2);
            roads[i].rotation = 0;
          }
      }
    }
    connections = 0;
  }
}
