
//18.18

function mostrar_posicion(event) {
  const posicionNavegador = `(${event.clientX}, ${event.clientY})`;
  const posicionPagina = `(${event.pageX}, ${event.pageY})`;

  document.getElementById("posicion_navegador").textContent = posicionNavegador;
  document.getElementById("posicion_pagina").textContent = posicionPagina;
}

function muestraInformacion(event, tipo) {
  if (tipo === "raton") {
    mostrar_posicion(event);
  } else if (tipo === "teclado") {
    const caracter = document.getElementById("caracter_pulsado");
    const codigo = document.getElementById("codigo_caracter");
    teclado.style.backgroundColor = "white";
    raton.style.backgroundColor = "white";

    caracter.textContent = "[" + event.key + "]";
    codigo.textContent = "[" + event.keyCode + "]";
  }
}
function manejarPulsarRaton() {
  const teclado = document.getElementById("teclado");
  const raton = document.getElementById("raton");

  teclado.style.backgroundColor = "#CCE6FF";
  raton.style.backgroundColor = "#FFFFCC";
}

function manejarEventoRaton(event) {
  muestraInformacion(event, "raton");
}

function manejarEventoTeclado(event) {
  muestraInformacion(event, "teclado");
}

document.addEventListener("mousemove", manejarEventoRaton);
document.addEventListener("mousedown", manejarPulsarRaton);
document.body.addEventListener("keydown", manejarEventoTeclado);
