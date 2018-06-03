var totalPopulation = 0;

//Update the population for all tiles on the grid
function updatePopulation() {
  for (i=0;i<families.length;i++) {
    var tilePopulation = 0;
    tilePopulation+=families[i]["adults"].length;
    tilePopulation+=families[i]["children"].length;
    population[families[i]["home"]] = tilePopulation;
    totalPopulation+=tilePopulation;
  }
}
