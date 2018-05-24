//Go through entire road structure and replace roads with intersections where necessary
function mergeRoad(pos) {
  var connections = 0;
  for (i=0;i<roads.length;i++) {
    // console.log("array position: "+i)
    if (getRoad("up",i) > 0) { console.log("up"+getRoad("up",i)); connections++; }
    if (getRoad("right",i) > 0) { console.log("right"+getRoad("right",i)); connections++; }
    if (getRoad("down",i) > 0) { console.log("down"+getRoad("down",i)); connections++; }
    if (getRoad("left",i) > 0) { console.log("left"+getRoad("left",i)); connections++; }
    if (connections > 2 && roads[i] >0) {
      // console.log("connections:"+connections);
      // console.log("updating road section at "+i);
      roads[i] = 3;
    }

    connections = 0;
  }
}
