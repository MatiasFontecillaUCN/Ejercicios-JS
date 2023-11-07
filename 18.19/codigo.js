//18.19
function informarZona(event) {
  let dimensiones = window.tamanoVentanaNavegador();
  let mitadAncho = dimensiones[0] / 2;
  let mitadAlto = dimensiones[1] / 2;
  let zona = document.getElementsByClassName("posicion")[0];

  if (event.clientX < mitadAncho) {
    if (event.clientY < mitadAlto) {
      zona.textContent = "Has pulsado en la zona izquierda arriba.";
    } else {
      zona.textContent = "Has pulsado en la zona izquierda abajo.";
    }
  } else {
    if (event.clientY < mitadAlto) {
      zona.textContent = "Has pulsado en la zona derecha arriba.";
    } else {
      zona.textContent = "Has pulsado en la zona derecha abajo.";
    }
  }
}

document.addEventListener("click", informarZona);