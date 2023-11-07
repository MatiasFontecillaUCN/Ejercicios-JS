//18.17

function oculta_muestra(enlace) {;
  const contenido = enlace.previousElementSibling;

  if (contenido.style.display === "none") {
    contenido.style.display = "block";
    enlace.textContent = "Ocultar contenidos";
  } else {
    contenido.style.display = "none";
    enlace.textContent = "Mostrar contenidos";
  }
}

const enlaces = document.getElementsByTagName("a");

for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener("click", function() {
    oculta_muestra(this);
  });
}
