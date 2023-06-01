var lenguajes = ["Español", "Inglés", "Francés", "Alemán"];
var seleccion = prompt("Selecciona el número del lenguaje:");


for (var i = 0; i < lenguajes.length; i++) {
  console.log(i + 1 + ". " + lenguajes[i]);
}

seleccion = parseInt(seleccion);

if (seleccion >= 1 && seleccion <= lenguajes.length) {
  var lenguajeSeleccionado = lenguajes[seleccion - 1];
  console.log("Seleccionaste: " + lenguajeSeleccionado);
} else {
  console.log("Selección inválida");
}
