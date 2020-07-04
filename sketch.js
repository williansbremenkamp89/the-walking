function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  //score = new Score();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2)
  cenas = {
    jogo,
    telaInicial
  };

}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}