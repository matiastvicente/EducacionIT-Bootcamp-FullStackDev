const btn = document.querySelectorAll("button");
const h2 = document.querySelector("main h2");
var colores = ["red", "green", "blue", "black"];

function start() {
  console.warn(document.querySelector("title").innerText);

  let flagMas = 0;
  let flagMenos = 0;
  btn[0].addEventListener("click", () => {
    let aux;
    if (flagMas == 1) {
      aux = colores.pop();
      colores.unshift(aux);
      flagMas = 0;
    }
    aux = colores.pop();
    colores.unshift(aux);
    changeColor(colores[0]);
    showColorName(colores[0]);
    flagMenos = 1;
  });

  btn[1].addEventListener("click", () => {
    let aux;
    if (flagMenos == 1) {
      aux = colores.shift();
      colores.push(aux);
      flagMenos = 0;
    }
    changeColor(colores[0]);
    showColorName(colores[0]);
    aux = colores.shift();
    colores.push(aux);
    flagMas = 1;
  });
}

function changeColor(color) {
  document.querySelector("main").style.background = color;
}

function showColorName(color) {
  let texto;
  switch (color) {
    case "red":
      texto = "rojo";
      break;

    case "green":
      texto = "verde";
      break;

    case "blue":
      texto = "azul";
      break;

    case "black":
      texto = "negro";
      break;

    default:
      texto = color;
      break;
  }
  h2.innerText = texto;
  h2.style.color = "white";
}

window.onload = start;
