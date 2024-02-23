document.addEventListener("DOMContentLoaded", () => {
  const pantalla = document.getElementById("pantalla");
  const teclas = document.getElementById("teclas");

  let operacion = "";
  let operando1 = null;
  let operando2 = null;
  let operador = null;
  let reiniciarPantalla = false;

  teclas.addEventListener("click", (event) => {
    const teclaPresionada = event.target.textContent;

    if (reiniciarPantalla) {
      reiniciarCalculadora();
    }

    if (!isNaN(parseFloat(teclaPresionada)) || teclaPresionada === ".") {
      if (operador === null) {
        if (operando1 === null) {
          operando1 = teclaPresionada;
        } else if (operando1.length < 13) {
          operando1 += teclaPresionada;
        }
        pantalla.textContent = operando1;
      } else {
        if (operando2 === null) {
          operando2 = teclaPresionada;
        } else if (operando2.length < 13) {
          operando2 += teclaPresionada;
        }
        pantalla.textContent = operando2;
      }
    } else if (["+", "-", "x", "/"].includes(teclaPresionada)) {
      if (operando1 !== null && operando2 !== null && operador !== null) {
        calcularResultado();
      }
      operador = teclaPresionada;
    } else if (teclaPresionada === "=") {
      calcularResultado();
    } else {
      reiniciarCalculadora();
    }
  });

  const calcularResultado = () => {
    if (operando1 === null || operando2 === null || operador === null) {
      return;
    }

    const num1 = parseFloat(operando1);
    const num2 = parseFloat(operando2);
    let resultado = 0;

    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "x":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          reiniciarCalculadora();
          pantalla.textContent = "Error";
          return;
        } else {
          resultado = num1 / num2;
        }
        break;
      default:
        return;
    }

    if (resultado.toString().length > 13) {
      pantalla.textContent = "Error";
    } else {
      pantalla.textContent = resultado;
    }
    operando1 = resultado.toString();
    operando2 = null;
    operador = null;
    reiniciarPantalla = true;
  };

  const reiniciarCalculadora = () => {
    pantalla.textContent = "0";
    operando1 = null;
    operando2 = null;
    operador = null;
    reiniciarPantalla = false;
  };
});
