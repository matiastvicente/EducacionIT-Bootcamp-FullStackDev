var buttons = document.querySelectorAll("#teclas div");
var screen = document.getElementById("pantalla");
var btn7 = buttons[0];
var btn8 = buttons[1];
var btn9 = buttons[2];
var btnMas = buttons[3];
var btn4 = buttons[4];
var btn5 = buttons[5];
var btn6 = buttons[6];
var btnMenos = buttons[7];
var btn1 = buttons[8];
var btn2 = buttons[9];
var btn3 = buttons[10];
var btnPor = buttons[11];
var btnPunto = buttons[12];
var btn0 = buttons[13];
var btnIgual = buttons[14];
var btnDiv = buttons[15];
var memoria = [];
var valor = [];
var i = 0;
var resultado = 0;
var symbol;

function botonesPresionados() {
  btn7.onclick = function () {
    click(btn7);
  };
  btn8.onclick = function () {
    click(btn8);
  };
  btn9.onclick = function () {
    click(btn9);
  };
  btn4.onclick = function () {
    click(btn4);
  };
  btn5.onclick = function () {
    click(btn5);
  };
  btn6.onclick = function () {
    click(btn6);
  };
  btn1.onclick = function () {
    click(btn1);
  };
  btn2.onclick = function () {
    click(btn2);
  };
  btn3.onclick = function () {
    click(btn3);
  };
  btn0.onclick = function () {
    click(btn0);
  };

  screen.onclick = function () {
    memoria = [];
    valor = [];
    resultado = 0;
    document.getElementById("pantalla").innerText = 0;
  };

  btnMas.onclick = clickMas;
  btnIgual.onclick = clickIgual;

  btnDiv.onclick = function () {
    click(btnDiv);
  };
  btnPunto.onclick = function () {
    clickSymbol(btnPunto);
  };
  btnPor.onclick = function () {
    clickSymbol(btnPor);
  };
  btnMenos.onclick = function () {
    clickSymbol(btnMenos);
  };
}

function click(element) {
  if (memoria.length < 13) {
    memoria.push(element.innerText);
    document.getElementById("pantalla").innerText = memoria.join("");
  }
  valor[i] = +memoria.join("");
  console.log(valor);
  /*   console.log("valor:  " + valor[i]); */
}

function clickMas() {
  resultado += valor[i];
  memoria = [];
  symbol = "+";
}

function clickIgual() {
  switch (symbol) {
    case "+":
      clickMas();
      break;

    default:
      break;
  }
  document.getElementById("pantalla").innerText = resultado;
}

/* function clickSymbol(element) {
  switch (element) {
    case btnMas:
      console.log("MAS");
      memoria = [];
      resultado += valor[i];
      i++;
      break;

    case btnMenos:
      console.log("MENOS");
      break;

    case btnPor:
      console.log("POR");
      break;

    case btnDiv:
      console.log("DIV");
      break;

    case btnIgual:
      console.log("IGUAL");
      document.getElementById("pantalla").innerText = resultado;

      break;

    default:
      break;
  }
} */

function start() {
  console.log(document.querySelector("title").innerText);
  botonesPresionados();
}

window.onload = start;
