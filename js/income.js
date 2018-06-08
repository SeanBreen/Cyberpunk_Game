//Storage for structures to add/remove their profit from player balance
var weeklyProfits = [];
var monthlyProfits = [];

//Collect income for buildings that give income every week
function collectWeeklyIncome() {
  for (i=0;i<weeklyProfits.length;i++) {
    player.money += weeklyProfits[i].profit;
    weeklyProfits[i].profitImgPos = weeklyProfits[i].pos[1]-weeklyProfits[i].profitImg.height;
    animationQueue.push([weeklyProfits[i],1]);
  }
}

//Collect income for buildings that give income every month
function collectMonthlyIncome() {
  for (i=0;i<monthlyProfits.length;i++) {
    monthlyProfits[i].profitImgPos = monthlyProfits[i].pos[1]-monthlyProfits[i].profitImg.height
    player.money += monthlyProfits[i].profit;
    animationQueue.push([monthlyProfits[i],1]);
  }
}

function getStructureProfitOccurrence(no,type) {
  switch(type) {
    case "b":
      switch(no) {
        case 1:
          return weeklyProfits;
          break;
        case 2:
          return monthlyProfits;
          break;
      }
      break;
    case "p":
      switch(no) {
        case 1:
          return monthlyProfits;
      }
      break;
  }
}

function getStructureProfit(no,type) {
  switch(type) {
    case "b":
      switch(no) {
        case 1:
          return 100;
          break;
        case 2:
          return 2000;
          break;
      }
      break;
    case "p":
      switch(no) {
        case 1:
          return -200;
      }
      break;
  }
}
