//18.21
function validateField(id, value) {
  if (id === "registro_nombre" && value.trim() === "") {
    alert("Nombre es obligatorio");
    return false;
  } else if (id === "registro_apellido" && value.trim() === "") {
    alert("Apellido es obligatorio");
    return false;
  } else if (id === "registro_email" && !emailValido(value)) {
    alert("Email no es válido");
    return false;
  } else if (id === "registro_password" && !contrasenaValida(value)) {
    alert("Password no cumple los requisitos");
    return false;
  } else if (
    id === "registro_comentarios" &&
    (!comentarioValido(value) || value.trim() === "")
  ) {
    if (value.trim() === "") {
      alert("El comentario es obligatorio");
      return false;
    }
    alert("El comentario no debe exceder los 50 caracteres");
    return false;
  }

  return true;
}

function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function contrasenaValida(contrasena) {
  if (
    /[a-z]/.test(contrasena) &&
    /[A-Z]/.test(contrasena) &&
    /\d/.test(contrasena)
  ) {
    return true;
  }
  return false;
}

function comentarioValido(comentario) {
  return comentario.length < 50;
}

function validarFormulario() {
  console.log("validate form");
  const condicionesCheckbox = document.getElementById("registro_condiciones");
  if (!condicionesCheckbox.checked) {
    alert("Debe aceptar las condiciones del servicio.");
    return false;
  }
  const inputs = document.querySelectorAll(
    "input[type='text'], input[type='password'], textarea"
  );
  for (let i = 0; i < inputs.length; i++) {
    if (!validateField(inputs[i].id, inputs[i].value)) {
      return false;
    }
  }
  return true;
}

const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password'], textarea"
);
const form = document.getElementById("registro");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("blur", () =>
    validateField(inputs[i].id, inputs[i].value)
  );
}
form.addEventListener("submit", () => validarFormulario());
