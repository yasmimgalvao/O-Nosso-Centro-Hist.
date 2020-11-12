var tela = 1;
let img1;
let img2;

function preload() {
  img1 = loadImage('IgrejadoGalo2.jpg');
  img2 = loadImage('matriz3.png')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
 //tela do menu
  if(tela == 1){
    background(61, 115, 151);
    textSize(30);
    text('O Nosso', 140, 55);
    text('Centro Histórico', 100, 87);
    textSize(10);
    text('Yasmim Galvão - 20180140758 / UFRN Natal', 10, 390);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    
  // menu com quatro opções de entrada
    if(mouseX > 20 && mouseX < 20+145 && mouseY > 140 && mouseY < 140+80){
      fill(color(10, 20, 60));
    }
    else{
      fill(color(61, 115, 151));
    }
    if (mouseIsPressed && mouseX > 20 && mouseX < 20+145 && mouseY > 140 && mouseY < 140+80){
      tela = 2;
    }
      rect(20, 140, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(25);
      text("Iniciar", 55, 185);
    
    
    if(mouseX > 230 && mouseX < 230+145 && mouseY > 140 && mouseY < 140+80){
      fill(color(10, 20, 60)); 
    }
    else{
      fill(color(61, 115, 151));
    }
      rect(230, 140, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(25);
      text("Instruções", 243, 185);
    if (mouseIsPressed && mouseX > 230 && mouseX < 230+145 && mouseY > 140 && mouseY < 140+80){
      tela = 3;
    }
  
    
    if(mouseX > 20 && mouseX < 20+145 && mouseY > 240 && mouseY < 240+80){
      fill(color(10, 20, 60)); 
    }
    else{
      fill(color(61, 115, 151));
    }
    if (mouseIsPressed && mouseX > 20 && mouseX < 20+145 && mouseY > 240 && mouseY < 240+80){
      tela = 4;
    }
      rect(20, 240, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(25);
      text("Resumo", 45, 290);
  
    if(mouseX > 230 && mouseX < 230+145 && mouseY > 240 && mouseY < 240+80){
      fill(color(10, 20, 60)); 
    }
    else{
      fill(color(61, 115, 151));
    }
      rect(230, 240, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(20);
      text("Colaboradoras", 237, 290);
    if (mouseIsPressed && mouseX > 230 && mouseX < 230+145 && mouseY > 240 && mouseY < 240+80){
      tela = 5;
    }
    
  }
  //Tela do inicio do jogo (iniciar)
  else if (tela == 2){
    background(61, 125, 141);
    image(img1, 55, 60);
    image(img2, 200, 150);
    textSize(15);
    text('Igreja do Galo', 55, 238);
    text('Igreja Matriz', 200, 352);
    }
  
  
  // Tela de instrução
  else if (tela == 3){
    background(61, 135, 151);
    textSize(20);
    noStroke();
     let s = 'Para jogar é nescessário usar o mouse e ter atenção. Você terá que memorizar os pontos turísticos da cidade que vai aparecer de acordo com a fase. Depois, com o mouse, associe a imagem ao nome. A cada fase o desafio aumenta! Boa sorte e bom jogo :D';
    text(s, 20, 20, 260, 260);
  }
  // Tela de resumo (quantas fases terá, do que se trata o jogo)
  else if (tela == 4){
    background(61, 145, 161);
    textSize(20);
    let s = 'Resumo - Este jogo trata das habilidades: (EF03HI04)(EF03HI05)(EF03HI09). E é destinado para alunos do terceiro ano do ensino fundamental. É um jogo da memória e é elaborado em 5 fases!';
    text(s, 20, 20, 260, 260);
   
  }
  //Tela de colaboradores
  else if (tela == 5){
    background(61, 155, 171);
    ellipse(120, 160, 90, 90);
    ellipse(280, 160, 90, 90);
    textSize(15);
    text('Yasmim Galvão', 70, 230);
    text('Neyre Kely', 245, 230);
  }
}