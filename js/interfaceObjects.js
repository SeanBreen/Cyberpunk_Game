//Button Array
var menuButtons = [];
//Position,Text,Length,Height,Type
menuButtons[0] = new Button([10,130],"Houses",80,30,0);
menuButtons[0].active = true;

menuButtons[1] = new Button([110,130],"Roads",80,30,0);
menuButtons[2] = new Button([210,130],"Power",80,30,0);

//Sub menu items
var subMenuItems = [];
//Houses
//Title,Description,Cost,Menu,Object Name,Image
subMenuItems[0] = new subMenuItem("House","+100/Wk",700,0,[1,"b"],getTextureName(1,"b"));
subMenuItems[1] = new subMenuItem("Apartments","+2000/Mo",3000,0,[2,"b"],getTextureName(2,"b"));
//Roads
subMenuItems[2] = new subMenuItem("Road","Regular Road",100,1,[2,"r"],getTextureName(2,"r"));
subMenuItems[3] = new subMenuItem("Road","item3",100,1,[2,"r"],getTextureName(2,"r"));
subMenuItems[4] = new subMenuItem("Road T-Int","item3",100,1,[3,"r"],getTextureName(3,"r"));
//Power
subMenuItems[5] = new subMenuItem("Generator","-200/Mo",100,2,[1,"p"],getTextureName(1,"p"));
//Buttons for sub menu items
var subMenuButtons = [];
//House buttons
//Position,Text,Length,Height,Type,Menu,ID number
subMenuButtons[0] = new SubMenuButton([0,0],"",130,35,1,0,0);
subMenuItems[0].subMenuButton = 0;
subMenuButtons[1] = new SubMenuButton([0,0],"",130,35,1,0,1);
subMenuItems[1].subMenuButton = 1;

//Road buttons
subMenuButtons[2] = new SubMenuButton([0,0],"",130,35,1,1,2);
subMenuItems[2].subMenuButton = 2;
subMenuButtons[3] = new SubMenuButton([0,0],"",130,35,1,1,3);
subMenuItems[3].subMenuButton = 3;
subMenuButtons[4] = new SubMenuButton([0,0],"",130,35,1,1,4);
subMenuItems[4].subMenuButton = 4;

//Power buttons
subMenuButtons[5] = new SubMenuButton([0,0],"",130,35,1,2,5);
subMenuItems[5].subMenuButton = 5;
//Buttons for controlling time
var speedControlButtons = [];
speedControlButtons[0] = new Button([0,0],"1x",70,50,1);
speedControlButtons[0].style = [20,"PT Mono","#3fbfe2","#fff"];
speedControlButtons[0].active = true;

speedControlButtons[1] = new Button([0,0],"10x",70,50,1);
speedControlButtons[1].style = [20,"PT Mono","#3fbfe2","#fff"];

speedControlButtons[2] = new Button([0,0],"100x",70,50,1);
speedControlButtons[2].style = [20,"PT Mono","#3fbfe2","#fff"];
