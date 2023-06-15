//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis da velocidade da Bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis da raquete;
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//Variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOPonente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;

let

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(0);
    mostraBolinha();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOPonente);
    movimentaBolinha();
    verificaColisaoBordas();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOPonente);
    movimentaRaquete();
    movimentaRaqueteOponente();
    placar();
    aumentaPLacar();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;

}

function verificaColisaoBordas() {

    if (xBolinha + raio > width ||
        xBolinha - raio < 0) {

        velocidadeXBolinha *= -1
    }

    if (yBolinha + raio > height ||
        yBolinha - raio < 0) {

        velocidadeYBolinha *= -1
    }
}

function mostraRaquete(x, y) {
    rect(x, y, larguraRaquete, alturaRaquete);
}

function verificaColisaoRaquete(x, y) {

    colidiu = collideRectCircle(x, y,
        larguraRaquete, alturaRaquete,
        xBolinha, yBolinha, raio);

    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function movimentaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10
    }

    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10
    }

    yRaquete = constrain(yRaquete, 1, 300)
}


function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOPonente -
        (larguraRaquete / 2) - 30;

    yRaqueteOPonente += velocidadeYOponente;

    yRaqueteOPonente = constrain(yRaqueteOPonente, 1, 300);
}

function placar() {
    stroke(255)
    textAlign(16);
    textSize(16);
    fill(color(255, 140, 0));
    rect(135, 10, 40, 20);
    rect(435, 10, 40, 20);
    fill(255);
    text(meusPontos, 150, 26);
    text(oponentePontos, 450, 26);

}

function aumentaPLacar() {

    if (xBolinha > 590) {
        meusPontos++;
    }
    if (xBolinha < 10) {
        oponentePontos++;
    }
}