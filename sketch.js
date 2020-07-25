let e01;
let e02;
let e03;
let e04;

let e11;
let e12;
let e13;
let e14;

let e21;
let e22;
let e23;
let e24;

let e31;
let e32;
let e33;
let e34;

let e41;
let e42;
let e43;
let e44;

let e51;
let e52;
let e53;
let e54;

let e61;
let e62;
let e63;
let e64;

let e71;
let e72;
let e73;
let e74;



function setup() {
var canvas =  createCanvas(windowWidth/2, windowHeight);
  canvas.parent('sketch-holder');



  noStroke();
  e01 = new Eye(150, windowHeight*0.12, 60);
  e02 = new Eye(300, windowHeight*0.12, 60);
  e03 = new Eye(450, windowHeight*0.12, 60);
  e04 = new Eye(600, windowHeight*0.12, 60);

  e11 = new Eye(150, windowHeight*0.24, 60);
  e12 = new Eye(300, windowHeight*0.24, 60);
  e13 = new Eye(450, windowHeight*0.24, 60);
  e14 = new Eye(600, windowHeight*0.24, 60);

  e21 = new Eye(150, windowHeight*0.36, 60);
  e22 = new Eye(300, windowHeight*0.36, 60);
  e23 = new Eye(450, windowHeight*0.36, 60);
  e24 = new Eye(600, windowHeight*0.36, 60);


  e31 = new Eye(150, windowHeight*0.48, 60);
  e32 = new Eye(300, windowHeight*0.48, 60);
  e33 = new Eye(450, windowHeight*0.48, 60);
  e34 = new Eye(600, windowHeight*0.48, 60);


  e41 = new Eye(150, windowHeight*0.6, 60);
  e42 = new Eye(300, windowHeight*0.6, 60);
  e43 = new Eye(450, windowHeight*0.6, 60);
  e44 = new Eye(600, windowHeight*0.6, 60);

  e51 = new Eye(150, windowHeight*0.72, 60);
  e52 = new Eye(300, windowHeight*0.72, 60);
  e53 = new Eye(450, windowHeight*0.72, 60);
  e54 = new Eye(600, windowHeight*0.72, 60);

  e61 = new Eye(150, windowHeight*0.84, 60);
  e62 = new Eye(300, windowHeight*0.84, 60);
  e63 = new Eye(450, windowHeight*0.84, 60);
  e64 = new Eye(600, windowHeight*0.84, 60);


  e71 = new Eye(150, 800, 60);
  e72 = new Eye(300, 800, 60);
  e73 = new Eye(450, 800, 60);
  e74 = new Eye(600, 800, 60);

}


function draw() {

  background(240,128,102);

 e01.update(mouseX, mouseY);
 e01.display();

 e02.update(mouseX, mouseY);
 e02.display();

 e03.update(mouseX, mouseY);
 e03.display();

 e04.update(mouseX, mouseY);
 e04.display();



 e11.update(mouseX, mouseY);
 e11.display();

 e12.update(mouseX, mouseY);
 e12.display();

 e13.update(mouseX, mouseY);
 e13.display();

 e14.update(mouseX, mouseY);
 e14.display();



 e21.update(mouseX, mouseY);
 e21.display();

 e22.update(mouseX, mouseY);
 e22.display();

 e23.update(mouseX, mouseY);
 e23.display();

 e24.update(mouseX, mouseY);
 e24.display();



 e31.update(mouseX, mouseY);
 e31.display();

 e32.update(mouseX, mouseY);
 e32.display();

 e33.update(mouseX, mouseY);
 e33.display();

 e34.update(mouseX, mouseY);
 e34.display();




 e41.update(mouseX, mouseY);
 e41.display();

 e42.update(mouseX, mouseY);
 e42.display();

 e43.update(mouseX, mouseY);
 e43.display();

 e44.update(mouseX, mouseY);
 e44.display();


 e51.update(mouseX, mouseY);
 e51.display();

 e52.update(mouseX, mouseY);
 e52.display();

 e53.update(mouseX, mouseY);
 e53.display();

 e54.update(mouseX, mouseY);
 e54.display();



 e61.update(mouseX, mouseY);
 e61.display();

 e62.update(mouseX, mouseY);
 e62.display();

 e63.update(mouseX, mouseY);
 e63.display();

 e64.update(mouseX, mouseY);
 e64.display();









}
