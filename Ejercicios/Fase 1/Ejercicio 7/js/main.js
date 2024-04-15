/* Variables */

var p = document.querySelector("p");
var btn = document.querySelectorAll("button");
var ArrayEmojis = ["😺", "😸", "😹", "⬛"];
var ArrayGatos = [];
var control0 = 0;
var control1 = 0;
var control2 = 0;
var numCajas = 0;

/* Funciones */

function start() {
  console.log("Ejecutando: " + document.querySelector("title").innerText);
  btn[0].onclick = function() { gato0() };
  btn[1].onclick = function() { gato1() };
  btn[2].onclick = function() { gato2() };
}

function gato0() {
  control0++;
  control1 = control2 = 0;
  ArrayGatos.push(ArrayEmojis[0]);
  p.innerText = ArrayGatos.join("");
  if (control0 == 6) {
    caja();
    control0 = 0;
  }
}

function gato1() {
  control1++;
  control0 = control2 = 0;
  ArrayGatos.push(ArrayEmojis[1]);
  p.innerText = ArrayGatos.join("");
  if (control1 == 6) {
    caja();
    control1 = 0;
  }
}

function gato2() {
  control2++;
  control0 = control1 = 0;
  ArrayGatos.push(ArrayEmojis[2]);
  p.innerText = ArrayGatos.join("");
  if (control2 == 6) {
    caja();
    control2 = 0;
  }
}

function caja() {
  while (ArrayGatos.length > numCajas) {
    ArrayGatos.pop();
  }
  ArrayGatos.unshift(ArrayEmojis[3]);
  p.innerText = ArrayGatos.join("");
  numCajas++;
}

/* Programa */

start();
