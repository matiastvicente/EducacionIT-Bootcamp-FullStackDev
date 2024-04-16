var peso = document.querySelector("#peso");
var dolar = document.querySelector("#dolar");
var p = document.querySelector("p");
var cb = document.querySelector("#update");
var update = document.querySelector("label:last-of-type");
var result;
var valorUSD = 0;
var myInterval;
var flag = 0;

function start() {
  dolar.addEventListener("input", () => {
    valorUSD = dolar.value;
    convertirValores();
  });

  peso.addEventListener("input", convertirValores);

  cb.addEventListener("input", () => {
    mostrarTiempo();
    if (flag == 0) {
      myInterval = setInterval(convertirAuto, 2000);
      flag = 1;
    } else {
      clearInterval(myInterval);
      flag = 0;
    }
  });
}

function convertirAuto() {
  let url = "https://api.bluelytics.com.ar/v2/latest";
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let respuesta = JSON.parse(xhr.response);
      dolar.value = respuesta.blue.value_sell;
      valorUSD = dolar.value;
      convertirValores();
    }
  });

  /*  Este timer lo agregué porque a veces la informacion de la consulta tardaba unos 
  milisegundos extra por ende no se podia realizar la operacion de division dentro de la funcion 'convertirValores' con
  el valor obtenido por la api. */

  xhr.send();
}

function mostrarTiempo() {
  let dateDate = new Date().toLocaleDateString();
  let dateTime = new Date().toLocaleTimeString();
  if (update.innerText == "") {
    update.innerText = "  " + dateDate + " " + dateTime;
  } else update.innerText = "";
  update.style.fontWeight = "bold";
}

function convertirValores() {
  result = peso.value / valorUSD;
  if (isFinite(result))
    p.innerText = "Valor convertido en USD $" + result.toFixed(2);
  else p.innerText = "Valor convertido en USD $";
}

window.onload = start;
