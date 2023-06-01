
const noticias = [ //Aqui se pone la noticia
  "Test 1 Nok..."
];

const version = "1.0.0";

function mostrarInformacion() {
  console.log("=== TheNokStore ===");
  console.log("Versión: " + version);
  console.log("Noticias:");

  for (let i = 0; i < noticias.length; i++) {
    console.log("- " + noticias[i]);
  }
}

setInterval(mostrarInformacion, 5000); //tiempo de ejecuion cada 5m 
function mostrarNotificacion() {//sistema de notificaciones
  console.log("¡Recuerda visitar TheNokStore para conocer las últimas novedades!");
}
setInterval(mostrarNotificacion, 10000);
