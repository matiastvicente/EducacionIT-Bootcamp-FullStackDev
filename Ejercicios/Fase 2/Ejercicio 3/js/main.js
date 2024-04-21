var drop = document.querySelectorAll("div");
var input = document.querySelectorAll("input");

function cargarImagen(urlImagen, div) {
  switch (div.id) {
    case "zona1":
      div = drop[0];
      break;

    case "zona2":
      div = drop[1];
      break;

    case "zona3":
      div = drop[2];
      break;

    default:
      break;
  }

  const img = document.querySelector("img");
  const xhr = new XMLHttpRequest();
  xhr.open("get", urlImagen);
  xhr.responseType = "blob";
  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      let imagenBlob = xhr.response;
      const url = URL.createObjectURL(imagenBlob);
      div.style.backgroundImage = "url(" + urlImagen + ")";
    }
  });
  xhr.send();
}

function dragAndDrop() {
  ["dragenter", "dragleave", "dragover", "drop"].forEach((event) =>
    document.addEventListener(event, (e) => e.preventDefault())
  );

  drop.forEach((div) => {
    div.addEventListener("dragenter", (e) => {
      e.preventDefault();
    });

    div.addEventListener("dragleave", (e) => {
      e.preventDefault();
    });

    div.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    div.addEventListener("drop", (e) => {
      e.preventDefault();
      const imagen = e.dataTransfer.files[0].name;
      cargarImagen("/img/" + imagen, div);
    });
  });

  input.forEach((input) => {
    input.addEventListener("change", () => {
      const imagen = input.files[0].name;
      cargarImagen("/img/" + imagen, input);
    });
  });
}

function start() {
  dragAndDrop();
}

window.onload = start;
