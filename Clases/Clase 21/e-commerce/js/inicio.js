function representarCardsProductos() {
  var cards = "";

  if (productos.length) {
    for (let i = 0; i < productos.length; i++) {
      cards +=
        "<section>" +
        "<h3>" +
        productos[i].nombre +
        "</h3>" +
        "<img src='" +
        productos[i].foto +
        "'>" +
        " <p>" +
        productos[i].detalles +
        "</p>" +
        "</section>";
    }
  } else cards = "NO HAY PRODUCTOS";
  document.querySelector(".section-cards-container").innerHTML = cards;
}

function start() {
  console.warn(document.querySelector("title").innerText);
  representarCardsProductos();
}
