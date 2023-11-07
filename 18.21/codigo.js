//18.21
function validateField(id, value) {
  if (id === "registro_nombre" && value.trim() === "") {
    alert("Nombre es obligatorio");
    return false;
  }
  if (id === "registro_apellido" && value.trim() === "") {
    alert("Apellido es obligatorio");
    return false;
  }
  if (id === "registro_email" && !isValidEmail(value)) {
    alert("Email no es válido");
    return false;
  }
  if (id === "registro_password" && !isValidPassword(value)) {
    alert("Password no cumple los requisitos");
    return false;
  }
  return true;
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPassword(password) {
  if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password)) {
    return true;
  }
  return false;
}

function validateForm() {
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
form.addEventListener("submit", () => validateForm());
