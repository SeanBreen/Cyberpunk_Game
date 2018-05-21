//Button Array
var menuButtons = [];
menuButtons[0] = new Button([10,130],"Houses",80,30,0);
menuButtons[1] = new Button([110,130],"Roads",80,30,0);
menuButtons[2] = new Button([210,130],"Power",80,30,0);

//Sub menu items
var subMenuItems = [];
subMenuItems[0] = new subMenuItem("Name1","item1",0,0);
subMenuItems[1] = new subMenuItem("Name2","item2",0,0);
subMenuItems[2] = new subMenuItem("Road Horiz","item3",100,1,getTextureName(1,"r"));
subMenuItems[3] = new subMenuItem("Road Vert","item3",100,1,getTextureName(2,"r"));
subMenuItems[4] = new subMenuItem("Road Inter","item3",100,1,getTextureName(3,"r"));

//Buttons for sub menu items
var subMenuButtons = [];
subMenuButtons[0] = new SubMenuButton([0,0],"",130,35,1,0);
subMenuItems[0].subMenuButton = 0;
subMenuButtons[1] = new SubMenuButton([0,0],"",130,35,1,1);
subMenuItems[1].subMenuButton = 1;
subMenuButtons[2] = new SubMenuButton([0,0],"",130,35,1,2);
subMenuItems[2].subMenuButton = 2;
subMenuButtons[3] = new SubMenuButton([0,0],"",130,35,1,3);
subMenuItems[3].subMenuButton = 3;
subMenuButtons[4] = new SubMenuButton([0,0],"",130,35,1,4);
subMenuItems[4].subMenuButton = 4;
