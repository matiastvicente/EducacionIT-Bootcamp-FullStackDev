var TextArea;
var Entradas = document.getElementsByTagName("input");
var Boton = document.getElementsByTagName("button");
var Li = document.getElementsByTagName("li");
var Checkeo = [0, 0, 0, 0, 0, 0, 0, 0];
var Control = 0;

function Inciso2() {
  console.log("Contenido del DOM cargado");
}

function Inciso3() {
  TextArea.value =
    "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";
}

function Inciso4() {
  let i;

  for (i = 0; i < Entradas.length; i++) {
    Entradas[i].disabled = false;
  }
  Boton[0].disabled = false;
  //console.log(Boton);
}

function Inciso5A(Destino, TextArea) {
  //console.log(TextArea.innerText);
  //console.log(Destino);
  Destino.innerHTML = TextArea.value;
  /*
    Destino.innerText = TextArea.value;
    No nos quedo claro si quieren que al hacer el reemplazo se interpreten o no las etiquetas ingresadas en el Origen
    */
}

function ConsultaN() {
  let n;
  do {
    n = window.prompt("Ingrese la cantidad de veces");
  } while (isNaN(n));
  return n;
}

function Inciso5_BCDE(Destino, TextArea, Cantidad) {
  let TextOrigen = TextArea.value;
  let TextDestino = Destino.innerText;
  for (let i = 0; i < Cantidad; i++) {
    Destino.innerHTML += TextOrigen;
  }
}

function Inciso6A(Destino) {
  Destino.innerText = "";
}

function Inciso6B(Destino) {
  Destino.innerText = Destino.innerHTML.toUpperCase();
}

function Inciso6C(Destino) {
  Destino.innerText = Destino.innerHTML.toLowerCase();
}

function Inciso7() {
  for (let i = 0; i < Li.length; i++) {
    let str = Li[i].innerHTML;
    Li[i].innerHTML = "[Ok] " + str;
  }
}

function funcionCheckeo(Checkeo) {
  let i=0;
  while (Checkeo[i] == 1 && i < Checkeo.length) {
    //console.log("Chequeo", i, Checkeo[i])
    i++;
  }
  i--;
  //console.log("Intermedio", i, Checkeo[i], Checkeo.length);
  if (i + 1 == Checkeo.length && Checkeo[i] == 1 && Control == 0) {
    //console.log("ENTRO", i, Checkeo[i])
    Control++;
    Inciso7();
  }
}

function start() {
  var BReemplazar = Entradas[0];
  var BAgregar = Entradas[1];
  var BAgregar5 = Entradas[2];
  var BAgregar10 = Entradas[3];
  var BAgregarN = Entradas[4];
  var BVaciar = Entradas[5];
  var BCMayus = Entradas[6];
  var BCMinus = Boton[0];
  var Destino = document.getElementById("destino");
  TextArea = document.getElementById("origen");
  
  Inciso2();
  Inciso3();
  Inciso4();

  BReemplazar.onclick = function () {
    Checkeo[0] = true;
    funcionCheckeo(Checkeo);
    Inciso5A(Destino, TextArea);
  };

  BAgregar.onclick = function () {
    Checkeo[1] = true;
    funcionCheckeo(Checkeo);
    Inciso5_BCDE(Destino, TextArea, 1);
  };

  BAgregar5.onclick = function () {
    Checkeo[2] = true;
    funcionCheckeo(Checkeo);
    Inciso5_BCDE(Destino, TextArea, 5);
  };

  BAgregar10.onclick = function () {
    Checkeo[3] = true;
    funcionCheckeo(Checkeo);
    Inciso5_BCDE(Destino, TextArea, 10);
  };

  BAgregarN.onclick = function () {
    Checkeo[4] = true;
    funcionCheckeo(Checkeo);
    Inciso5_BCDE(Destino, TextArea, ConsultaN());
  };

  BVaciar.onclick = function () {
    Checkeo[5] = true;
    funcionCheckeo(Checkeo);
    Inciso6A(Destino);
  };

  BCMayus.onclick = function () {
    Checkeo[6] = true;
    funcionCheckeo(Checkeo);
    Inciso6B(Destino);
  };

  BCMinus.onclick = function () {
    Checkeo[7] = true;
    funcionCheckeo(Checkeo);
    Inciso6C(Destino);
  };
}

window.onload = start;
