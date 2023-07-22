let contador = 0;
let larguraacai = window.innerWidth/10;
let limite = 51;
let corAcai;

let passo = 0;
let passoAltura = window.innerHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  corAcai = color(150,0,250);
  
}

function draw() {
  
}

function mousePressed() {
  let contadorR = contador*3;
  let contadorB = contador*5;
  
  contador++;
  print(contador);
  print(window.innerWidth +'e'+ larguraacai)
  print('contadorR:'+contadorR + ' ContadorB:'+contadorB)
  if (contador <=limite) {
    background(contadorR,0,contadorB);
  for(var i=0;i<larguraacai/3;i++){
    ascii_acai(random(window.innerWidth),random(window.innerHeight));
  }
    //contadorR = 150 e contadorB = 250
}else{
  //background(corAcai);
  bateracai();
}
  
}

function acai() {
   //fill(corAcai);
  //ellipse(random(window.innerWidth),random(window.innerHeight),larguraacai);
  
}

function bateracai(){
  noStroke();
  fill(corAcai);
  rect(0,passo,window.innerWidth,window.innerHeight)
  if(passo > window.innerHeight){
    passo = -passoAltura;
  }
  
}

function ascii_acai( locX, locY){
  
  textFont('monospace',6);
  //textAlign(CENTER,CENTER);
  fill(corAcai);
  text('                         . /((((((///((((((((((((((((                           \n                    ,.,////*****////*****//**//////(((((//,                     \n                 ,(/*****,,,,**,,#&&&#/,,,**********///////***,                 \n              /(///*,//(////,,...../%(/,,..,,,,,,,,,************,,              \n           ,////*((//***///(/****/((/,....... .......,,,,,,*****,,,,.           \n         .((//**/###%#/*,**,,,.....            .......,,,,,,,,,,,,,,,,.         \n       *(####%#(((#(((##(*,,,..                ........,,,,,,,,,,,,,,,...       \n      ,#%%&&&&&%#/////****,,..                  ........,,,,,,,,,,,,,,....      \n     ((%&&&@@@@&%(*,****,.......                .........,,,,,,,,,,,,......     \n   ((##%@&&&@@@&#/*,,*,......                    .........,,,,,,.............   \n  .(##%%&&@&&%#(*,..,..   ...                      ......,,,,...............    \n  /(%%%%&&%###(*,......  .......                    ...,,,...............       \n .(/(###(//((*,...,,.    .,....                     ....................        \n .#(**///***/,..... ....   ...                       .. ................        \n .#(**,,,*,,,,...... ....                              ...............          \n .%#(**,,,,,,...,,.........                            ..............           \n .%%#/**,,,,,...,,,,,....                      ..      ..    ......             \n .%%#(/*,,,,,,,...,........                    ..... .....                      \n .%%##(/**,,,..............          ..       .............                     \n  *###(///**,,................... .........................                     \n  .(#((///**,,.,,...........................................                    \n    ((((//***,,..............................................                   \n     (((//***,,,.....,.......................................                   \n      ,(///**,,,,,,,,,,,.....................................                   \n        /(///**,,,,,,,,,,...................................                    \n          /////*,,,,,,,,,,..................................                    \n            ,///***,,,,,,,,..,..............................                    \n              .((//***,,,,,,,,,,,.........................                      \n                  .///****,,,,,,,,,,,,..................... .                   \n                      .////*****,,,,,,,,,,,,,............                       \n                              ,/**********,,,,,,..                              \n',locX,locY);
  
}