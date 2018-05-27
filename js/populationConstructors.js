var families = [];

//Constructor to build a person
var Person = function(forename,age,gender) {
  this.forename = forename;
  this.happiness = 1;
  this.age = age;
  this.gender = gender;
}

//Constructor to build a family from people
var Family = function(adults,children,home,surname,tier) {
  this.adults = adults;
  this.children = children;
  this.home = home;
  this.surname = surname;
  this.tier = tier;
}

//Generate a family
function generateFamily(tilePos) {
  var adults = [];
  var children = [];
  //Pick number of adults for the family 1-2
  for (i=0;i<Math.floor(Math.random() * 2)+1;i++){
    var gender = 0;
    //Pick the gender for the adult
    if (Math.floor(Math.random()*2) == 0) {
      gender = "m";
    } else {
      gender = "f";
    }
    var forename = getForename(gender);
    var age = Math.floor(Math.random()*30)+20;
    adults[i] = new Person(forename,age,gender);
  }

  //Pick number of children for the family 0-3
  for (i=0;i<Math.floor(Math.random() * 4);i++){
    var gender = 0;
    //Pick the gender for the child
    if (Math.floor(Math.random()*2) == 0) {
      gender = "m";
    } else {
      gender = "f";
    }
    var forename = getForename(gender);
    var age = Math.floor(Math.random()*17)+1;
    children[i] = new Person(forename,age,gender);
  }

  var surname = getSurname();
  var home = 1;
  //Generate the tier of the family's class
  var tierRand = Math.floor(Math.random()*10)+1;
  var tier = 0;

  if (tierRand >=1 && tierRand <= 5) {
    tier = 1;
  } else if (tierRand >5 && tierRand <=8) {
    tier = 2;
  } else {
    tier = 3;
  }

  families[families.length] = new Family(adults,children,tilePos,surname,tier);
}
//Return a random forename given a gender
function getForename(gender) {
  if (gender == "m") {
    var names = ["James","Jack","Noah","Charlie","Daniel","Oliver","Matthew","Harry","Thomas","Jake","Lewis","Logan","Leo","Alexander","Sebastian","George","William","Sean","Scott","Andrew","Robert","Aaron","Mitchell"];
  } else {
    var names = ["Olivia","Amelia","Emily","Isla","Ava","Jessica","Isabella","Lily","Ella","Mia","Jennifer","Lucy","Holly","Grace","Anna","Charlotte","Isabelle","Emma","Zoe","Robin","Charlie","Abbie","Alice","Louise","Aislynn","Lorelie","Chloe"];
  }
  return names[Math.floor(Math.random() * names.length)];
}

//Returns a random surname
function getSurname() {
  var names = ["Smith","Bain","Douglas","Stewart","McDonald","Henderson","Smart","Jones","Williams","Taylor","Davies","Evans","Thomas","Johnson","Roberts","Walker","Wright","Robinson","White","Edwards","Green","Lewis","Jackson","Clarke"];
  return names[Math.floor(Math.random() * names.length)];
}
