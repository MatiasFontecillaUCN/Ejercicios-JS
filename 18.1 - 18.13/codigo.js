//18.1
console.log("18.1");
//Imprime "Hola Mundo!" en la consola
console.log("Hola Mundo!");

//Imprime "Soy el primer script" en la consola
console.log("Soy el primer script");

// 18.2
console.log("18.2");
const message =
  "Hola mundo! \n Que facil es incluir 'comillas simples' y \"comillas dobles\"";

alert(message);

// 18.3
console.log("18.3");
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

months.map((month) => console.log(month));

// 18.4
console.log("18.4");
var valores = [true, 5, false, "hola", "adios", 2];

console.log(
  valores[3].length > valores[4].length
    ? valores[3] + " es mayor que " + valores[4]
    : valores[4] + " es mayor que " + valores[3]
);

console.log((valores[1] != valores[2]) + " utilizando el operador !=");

console.log((valores[1] == valores[2]) + " utilizando el operador ==");
console.log("Los numeros son " + valores[1] + " y " + valores[5]);
console.log("Suma " + (valores[1] + valores[5]));
console.log("Resta " + (valores[1] - valores[5]));
console.log("Multiplicacion " + valores[1] * valores[5]);
console.log("Division " + valores[1] / valores[5]);
console.log("Modulo " + (valores[1] % valores[5]));

// 18.5
console.log("18.5");

var numero1 = 5;
var numero2 = 8;
console.log("numero1 = " + numero1 + " numero2 = " + numero2);

if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 < 0 || numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (numero1 + 1 < numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}

// 18.6
console.log("18.6");

var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

let dni_persona = 491190;
let letra_dni = "W";

if (dni_persona < 0 || dni_persona > 99999999)
  console.log("El numero proporicionado no es valido");
else {
  let letra_calculada = letras[dni_persona % 23];
  if (letra_dni !== letra_calculada) {
    console.log("La letra indicada no es correcta");
  } else {
    console.log("El numero y la letra dni son correctos");
  }
}

// 18.7
console.log("18.7");

let entero = 5;
let resultado = 1;
for (let i = 1; i < entero + 1; i++) {
  resultado = resultado * i;
}

console.log(resultado);

// 18.8
console.log("18.8");

function par_impar(numero) {
  return numero % 2 === 0
    ? "El numero " + numero + " es par"
    : "El numero " + numero + " es impar";
}

console.log(par_impar(10));

// 18.9
console.log("18.9");

let cadena1 = "letras";

if (cadena1 === cadena1.toUpperCase()) {
  console.log("La cadena solo tiene letras mayuscula");
} else if (cadena1 === cadena1.toLowerCase()) {
  console.log("La cadena solo tiene letras minuscula");
} else {
  console.log("La cadena tiene una mescla de mayusculas y minusculas");
}

// 18.10
console.log("18.10");

let cadena2 = "lkjhjkl";

function esPalindromo(cadena2) {
  cadena2 = cadena2.toLowerCase();
  let cadena_invertida = cadena2.split("").reverse().join("");
  return cadena2 === cadena_invertida;
}
if (esPalindromo(cadena2)) {
  console.log(cadena2 + " es palindromo");
} else {
  console.log(cadena2 + " no es palindromo");
}

// 18.11
console.log("18.11");

function Persona(nombre, edad, genero) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
  console.log(
    `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}`
  );
};

function Estudiante(nombre, edad, genero, curso, grupo) {
  Persona.call(this, nombre, edad, genero);
  this.curso = curso;
  this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function () {
  console.log("Metodo registrar estudiante");
};

function Profesor(nombre, edad, genero, asignatura, nivel) {
  Persona.call(this, nombre, edad, genero);
  this.asignatura = asignatura;
  this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function () {
  console.log("Metodo asigniar profesor");
};

const persona1 = new Persona("Juan", 30, "Masculino");
persona1.obtDetalles();

const estudiante1 = new Estudiante(
  "Maria",
  20,
  "Femenino",
  "Informática",
  "Grupo A"
);
estudiante1.obtDetalles();
estudiante1.registrar();

const profesor1 = new Profesor(
  "Pedro",
  40,
  "Masculino",
  "Matemáticas",
  "Secundaria"
);
profesor1.obtDetalles();
profesor1.asignar();

// 18.12
console.log("18.12");

function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

const resultados = new Array(11).fill(0);

for (let i = 0; i < 36000; i++) {
  const dado1 = lanzarDado();
  const dado2 = lanzarDado();
  const suma = dado1 + dado2;
  resultados[suma - 2]++;
}

const repeticiones = 36000;
console.log("Resultado de la simulación de", repeticiones, "lanzamientos:");
for (let i = 2; i <= 12; i++) {
  console.log("Suma", i, "apareció", resultados[i - 2], "veces");
}

// 18.13
console.log("18.13");

const regexFecha = /\d{2}\/\d{2}\/\d{4}/;
const textoFecha = "Nací el 05/04/1982 en Donostia.";
const coincidenciasFecha = textoFecha.match(regexFecha);
console.log("Fecha válida:", coincidenciasFecha);

const regexEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
const email = "mi.email@ejemplo.com";
const esCorreoValido = regexEmail.test(email);
console.log("Correo electrónico válido:", esCorreoValido);

function escapeHTML(text) {
  const replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];
  return text.replace(/&|<|>|"/g, (match) => replacements[match]);
}

const textoHTML = "<p>Este es un <script>alert('ataque')</script> mensaje.</p>";
const textoLimpioHTML = escapeHTML(textoHTML);
console.log("Texto HTML limpio:", textoLimpioHTML);

const nombreCompleto = "John Smith";
const nombreInvertido = nombreCompleto.replace(/(\w+)\s(\w+)/, "$2, $1");
console.log("Nombre invertido:", nombreInvertido);
