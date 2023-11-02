let contador = 0;
let larguraacai = window.innerWidth/10;
let limite = 51;
let corAcai;
let font;

function setup() {
  createCanvas(windowWidth, windowHeight);
  corAcai = color(150,0,250);
  
}

function draw() {
  background(0);
  textoAcai("Use o botão esquerdo do mouse para bater açai.");
  noLoop();
}

function mousePressed() {
  let contadorR = contador*3;
  let contadorB = contador*5;
  
  contador++;
  //print(contador);
  //print(window.innerWidth +'e'+ larguraacai)
  //print('contadorR:'+contadorR + ' ContadorB:'+contadorB)
  if (contador <=limite) {
    resizeCanvas(windowWidth, windowHeight);
    background(contadorR,0,contadorB);
  for(var i=0;i<larguraacai/3;i++){  ascii_acai(random(window.innerWidth),random(window.innerHeight));
    }
    if(contador == 51){
      textoAcai("B4t3nd0 @ç@i");
  }   //contadorR = 150 e contadorB = 250
}
  
}

function bateracai(){
  noStroke();
  fill(corAcai);
}

function preload(){
  font = loadFont('DejaVuSerif.ttf');
}

function textoAcai(textoInterno){
  textFont(font);
  textSize(windowWidth*0.035);
  textAlign(CENTER,CENTER);
  fill(255);
  text(textoInterno ,window.innerWidth/2, window.innerHeight/2);
  
  
}

function ascii_acai( locX, locY){
  
  textFont('monospace',6);
  //textAlign(CENTER,CENTER);
  fill(corAcai);
  text('                         . /((((((///((((((((((((((((                           \n                    ,.,////*****////*****//**//////(((((//,                     \n                 ,(/*****,,,,**,,#&&&#/,,,**********///////***,                 \n              /(///*,//(////,,...../%(/,,..,,,,,,,,,************,,              \n           ,////*((//***///(/****/((/,....... .......,,,,,,*****,,,,.           \n         .((//**/###%#/*,**,,,.....            .......,,,,,,,,,,,,,,,,.         \n       *(####%#(((#(((##(*,,,..                ........,,,,,,,,,,,,,,,...       \n      ,#%%&&&&&%#/////****,,..                  ........,,,,,,,,,,,,,,....      \n     ((%&&&@@@@&%(*,****,.......                .........,,,,,,,,,,,,......     \n   ((##%@&&&@@@&#/*,,*,......                    .........,,,,,,.............   \n  .(##%%&&@&&%#(*,..,..   ...                      ......,,,,...............    \n  /(%%%%&&%###(*,......  .......                    ...,,,...............       \n .(/(###(//((*,...,,.    .,....                     ....................        \n .#(**///***/,..... ....   ...                       .. ................        \n .#(**,,,*,,,,...... ....                              ...............          \n .%#(**,,,,,,...,,.........                            ..............           \n .%%#/**,,,,,...,,,,,....                      ..      ..    ......             \n .%%#(/*,,,,,,,...,........                    ..... .....                      \n .%%##(/**,,,..............          ..       .............                     \n  *###(///**,,................... .........................                     \n  .(#((///**,,.,,...........................................                    \n    ((((//***,,..............................................                   \n     (((//***,,,.....,.......................................                   \n      ,(///**,,,,,,,,,,,.....................................                   \n        /(///**,,,,,,,,,,...................................                    \n          /////*,,,,,,,,,,..................................                    \n            ,///***,,,,,,,,..,..............................                    \n              .((//***,,,,,,,,,,,.........................                      \n                  .///****,,,,,,,,,,,,..................... .                   \n                      .////*****,,,,,,,,,,,,,............                       \n                              ,/**********,,,,,,..                              \n',locX,locY);
  
}