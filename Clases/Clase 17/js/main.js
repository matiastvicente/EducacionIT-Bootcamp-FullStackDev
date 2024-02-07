var a = 5,
  b = 6,
  c = 7;

console.log(a, b, c);

//    inicialización/es    ;    test de condición/es    ;      post ejecución/es     --->  CAMPOS
for (var i = 0, j = 9; i < 10 && j >= 5; i++, j--) {
  console.log(i, j);
}

// ------------------------------------------------------------------------------------------------
console.log("\n/* Ciclo for : anidados */");

var contador = 0;

for (var i = 10; i < 15; i++) {
  for (var j = 20; j < 25; j++) {
    for (var k = 0; k < 2; k++) {
      console.log(++contador, i, j, k);
    }
  }
}
