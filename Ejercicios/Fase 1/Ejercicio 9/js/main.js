var buffer = [];
var cuenta = "";
var pantalla = document.getElementById("pantalla");
var j = 0;

const click = (num) => {
  if (String(eval(cuenta)).split("").length < 13) {
    if (buffer.length < 13) {
      buffer.push(num);
      if (pantalla.innerText == 0 || j == 1) {
        pantalla.innerText = buffer.join("");
        j = 0;
      } else pantalla.innerText += num;
      cuenta = buffer.join("");
      console.log(cuenta);
    }
  } else pantalla.innerText = "Error";
};

const symbol = (sym) => {
  j = 0;
  buffer.push(sym);
  if (sym == "=") {
    console.log(eval(cuenta));
    if (String(eval(cuenta)).split("").length < 13)
      pantalla.innerText = eval(cuenta);
    else pantalla.innerText = "Error";
    cuenta = eval(cuenta);
    buffer = [];
    buffer.push(cuenta);
  }

  if (sym == ".") {
    if (buffer.length < 13) {
      if (pantalla.innerText != 0) {
        pantalla.innerText = buffer.join("");
      }
    }
  }
  j = 1;
};

const botonesPresionados = () => {
  document.getElementById("1").onclick = () => {
    click(1);
  };
  document.getElementById("2").onclick = () => {
    click(2);
  };
  document.getElementById("3").onclick = () => {
    click(3);
  };
  document.getElementById("4").onclick = () => {
    click(4);
  };
  document.getElementById("5").onclick = () => {
    click(5);
  };
  document.getElementById("6").onclick = () => {
    click(6);
  };
  document.getElementById("7").onclick = () => {
    click(7);
  };
  document.getElementById("8").onclick = () => {
    click(8);
  };
  document.getElementById("9").onclick = () => {
    click(9);
  };
  document.getElementById("0").onclick = () => {
    click(0);
  };
  document.getElementById("+").onclick = () => {
    symbol("+");
  };
  document.getElementById("-").onclick = () => {
    symbol("-");
  };
  document.getElementById("x").onclick = () => {
    symbol("*");
  };
  document.getElementById("/").onclick = () => {
    symbol("/");
  };
  document.getElementById("=").onclick = () => {
    symbol("=");
  };
  document.getElementById(".").onclick = () => {
    symbol(".");
  };
  document.getElementById("pantalla").onclick = () => {
    buffer = [];
    pantalla.innerText = 0;
    cuenta = "";
  };
};

function start() {
  console.log(document.querySelector("title").innerText);
  botonesPresionados();
}

window.onload = start;
