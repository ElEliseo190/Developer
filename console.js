// Definir las noticias y la versión del proyecto
const noticias = [
  "Test 1 Nok..."
];

const version = "1.0.0";

// Función para generar el código con la información del proyecto y las noticias
function generarCodigo() {
  let codigo = "=== TheNokStore ===\n";
  codigo += "Versión: " + version + "\n";
  codigo += "Noticias:\n";

  for (let i = 0; i < noticias.length; i++) {
    codigo += "- " + noticias[i] + "\n";
  }

  return codigo;
}

// Llamar a la función para obtener el código
const codigo = generarCodigo();

// Imprimir el código en la consola
console.log(codigo);
