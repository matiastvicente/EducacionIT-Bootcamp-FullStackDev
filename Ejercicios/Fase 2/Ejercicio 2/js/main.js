var peso = document.querySelector("#peso");
var dolar = document.querySelector("#dolar");
var p = document.querySelector("p");
var cb = document.querySelector("#update");
var update = document.querySelector("label:last-of-type");
var valorUSD = 0;

function start() {
  dolar.addEventListener("input", () => {
    valorUSD = dolar.value;
    if (valorUSD == 0 || peso.value == 0) {
      p.innerText = "Valor convertido en USD";
    } else {
      let result = peso.value / valorUSD;
      p.innerText = "Valor convertido en USD $" + result.toFixed(2);
    }
  });
  peso.addEventListener("input", () => {
    if (valorUSD == 0 || peso.value == 0) return;
    else {
      let result = peso.value / valorUSD;
      p.innerText = "Valor convertido en USD $" + result.toFixed(2);
    }
  });
  cb.addEventListener("input", () => {
    convertirAuto();
    if (valorUSD == 0 || peso.value == 0) return;
    else {
      let result = peso.value / valorUSD;
      p.innerText = "Valor convertido en USD $" + result.toFixed(2);
    }
    dolar.value = valorUSD;
    let dateDate = new Date().toLocaleDateString();
    let dateTime = new Date().toLocaleTimeString();
    if (update.innerText == "") {
      update.innerText = "  " + dateDate + " " + dateTime;
    } else update.innerText = "";
    update.style.fontWeight = "bold";
  });
}

function convertirAuto() {
  let url = "https://api.bluelytics.com.ar/v2/latest";
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let respuesta = JSON.parse(xhr.response);
      valorUSD = respuesta.blue.value_sell;
    }
  });
  xhr.send();
}

window.onload = start;
