//experimenting with political imagery

let squares = [];
let base;
let fisher;
let cafe;
let folx;
let postcard;
let silhouette;
let EL1;
let dad1;
let EL2;
let dad2;
let x = 0;
let y = 0;
let alp1 = 0;
let alp2 = 100;

function preload(){
  base = loadImage('assets/ELDad_PatriaOMuerte_base.png');
  cafe = loadImage("assets/ELDad_PatriaOMuerte_cafe.png");
  fisher = loadImage("assets/ELDad_PatriaOMuerte_fisher.png");
  folx = loadImage("assets/ELDad_PatriaOMuerte_folx.png")
  EL1 = loadImage('assets/ELDad_PatriaOMuerte_EL.png');
  dad1 = loadImage('assets/ELDad_PatriaOMuerte_dad.png');
  EL2 = loadImage('assets/ELDad_PatriaOMuerte_EL2.png');
  dad2 = loadImage('assets/ELDad_PatriaOMuerte_dad2.png');
  postcard = loadImage('assets/ELDad_PatriaOMuerte_postcard.png');
  silhouette = loadImage('assets/ELDad_PatriaOMuerte_silhouette.png')

  for (let i = 0; i < 16; i++){
    squares[i] = loadImage("assets/grid_" + i + ".png");
  }  
}

function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(7);
}

function draw() {
  background(0);
  
  //base
  push();
  tint(255, random(70, 100));
  image(base, 0, 0, width, height);
  pop();
  
  // fisher
  blend(fisher, 0, 0, fisher.width, fisher.height, 0, 0, width, height, DARKEST);

  //cafe
  blend(cafe, 0, 0, cafe.width, cafe.height, 0, 0, width, height, LIGHTEST);

  // folx
  blend(folx, 0, 0, folx.width, folx.height, 0, 0, width, height, DARKEST);
  
  


  
  //Image Grid shuffle
  push();
  tint(random(360), 100, 100, alp1);
  for (j = 0; j < squares.length; j++){
    image(squares[int(random(16))], x, y, width/4, height/4);
    //move down
    x += width/4;
    if (x >= width){
      x = 0;
      y += height/4;
    }
    if (y >= height){
      y = 0;
    }
  }
  pop();

  //dad
  push();
  tint(random(180, 250), random(50), alp2);
  dad1.filter(GRAY);
  image(dad1, 0, 0, width, height);
  pop();

  // push();
  // tint(random(0,70), random(50), 100, alp1);
  // dad2.filter(GRAY);
  // image(dad2, 0, 0, width, height);
  // pop();

  //  //EL
  //  push();
  //  tint(random(180, 250), random(50), 100, alp1);
  //  EL1.filter(GRAY);
  //  image(EL1, 0, 0, width, height);
  //  pop();

  push();
  tint(random(0,70), random(50), alp2);
  EL2.filter(GRAY);
  image(EL2, 0, 0, width, height);
  pop();


  //postcard
  push();
  tint(255, alp2);
  postcard.filter(GRAY);
  image(postcard, 0, 0, width, height);
  pop();

  push();
  tint(255, alp1);
  silhouette.filter(INVERT);
  image(silhouette, 0, 0, width, height);
  pop();



  if (frameCount%int(random(20))==0){
   
    if (alp1 <= 0){
      alp1 = 100;
      alp2 = 0;
  } else {
    alp1 = 0;
    alp2 = 100;
    }
  }
}

