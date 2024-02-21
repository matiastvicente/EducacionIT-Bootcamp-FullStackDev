function agregar(e) {
  e.preventDefault();
  console.log("agregar()");

  var refNombre = document.getElementById("nombre");
  var refPrecio = document.getElementById("precio");
  var refStock = document.getElementById("stock");
  var refMarca = document.getElementById("marca");
  var refCategoria = document.getElementById("categoria");
  var refDetalles = document.getElementById("detalles");
  var refFoto = document.getElementById("foto");
  var refEnvio = document.getElementById("envio");

  var nombre = refNombre.value;
  var precio = +refPrecio.value;
  var stock = +refStock.value;
  var marca = refMarca.value;
  var categoria = refCategoria.value;
  var detalles = refDetalles.value;
  var foto = refFoto.value;
  var envio = refEnvio.checked;

  var producto = {
    nombre: nombre,
    precio: precio,
    stock: stock,
    marca: marca,
    categoria: categoria,
    detalles: nombre,
    foto: foto,
    envio: envio,
  };

  console.log(producto);

  productos.push(producto);

  representarTablaProductos();

  refNombre.value = "";
  refPrecio.value = "";
  refStock.value = "";
  refMarca.value = "";
  refCategoria.value = "";
  refDetalles.value = "";
  refFoto.value = "";
  refEnvio.checked = false;
}

function representarTablaProductos() {
  var filasTabla =
    "<tr>" +
    "<th>nombre</th>" +
    "<th>precio</th>" +
    "<th>stock</th>" +
    "<th>marca</th>" +
    "<th>detalles</th>" +
    "<th>foto</th>" +
    "<th>envío</th>" +
    "</tr>";

  for (let i = 0; i < productos.length; i++) {
    filasTabla +=
      "<tr>" +
      "<td>"+ productos[i].nombre + "</td>" +
      "<td>"+ productos[i].precio + "</td>" +
      "<td>"+ productos[i].stock + "</td>" +
      "<td>"+ productos[i].marca + "</td>" +
      "<td>"+ productos[i].detalles + "</td>" +
      "<td><img width=75 src='"+ productos[i].foto + "'></td>" +
      "<td>"+ (productos[i].envio? 'Si' : 'No') + "</td>" +
      "</tr>";
  }

  document.querySelector("table").innerHTML = filasTabla;
}

function start() {
  console.warn(document.querySelector("title").innerText);
  var refForm = document.querySelector("main form");
  refForm.onsubmit = agregar;
  representarTablaProductos();
}
