var totalPopulation = 0;

function updatePopulation() {
  for (i=0;i<families.length;i++) {
    var tilePopulation = 0;
    tilePopulation+=families[i]["adults"].length;
    tilePopulation+=families[i]["children"].length;
    population[families[i]["home"]] = tilePopulation;
    totalPopulation+=tilePopulation;
  }
}
