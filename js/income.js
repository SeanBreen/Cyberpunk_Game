//Collect income for buildings that give income every week
function collectWeeklyIncome() {
  for (i=0;i<buildings.length;i++) {
    if (buildings[i] == 1) {
      player.money+=getIncomeValue(buildings[i],"b","w");
    }
  }
}

//Collect income for buildings that give income every month
function collectMonthlyIncome() {
  for (i=0;i<buildings.length;i++) {
    if (buildings[i] == 2) {
      player.money+=getIncomeValue(buildings[i],"b","m");
    }
  }
}

function getIncomeValue(no,type,increment) {
  //Get the type of texture
  switch(increment) {
    case "w":
      switch(type) {
        case "b":
          switch(no) {
            case 1:
              return 100;
              break;
          }
          break;
      }
      break;
    case "m":
      switch(type) {
        case "b":
          switch(no) {
            case 2:
              return 2000;
              break;
          }
          break;
      }
      break;
  }

}
