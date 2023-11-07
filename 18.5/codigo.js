// Imprime "Hola Mundo!" en la consola
//console.log("Hola Mundo!");

// Imprime "Soy el primer script" en la consola
//console.log("Soy el primer script");

//18.2
const message =
  "Hola mundo! \n Que facil es incluir 'comillas simples' y \"comillas dobles\"";

// alert(message)

//18.3
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

//months.map((month) => console.log(month));

//18.4
var valores = [true, 5, false, "hola", "adios", 2];

console.log(valores[3].length > valores[4].length
    ? valores[3] + " es mayor que " + valores[4]
    : valores[4] + " es mayor que " + valores[3]);

// console.log(
//   (valores[1] != valores[2]) + " utilizando el operador !="
// );

// console.log(
//   (valores[1] == valores[2]) + " utilizando el operador =="
// );
// console.log("Los numeros son "+ (valores[1]) +" y "+ (valores[5]))
// console.log("Suma " + (valores[1]+valores[5]))
// console.log("Resta " + (valores[1]-valores[5]))
// console.log("Multiplicacion " + (valores[1]*valores[5]))
// console.log("Division " + (valores[1]/valores[5]))
// console.log("Modulo " + (valores[1]%valores[5]))

//18.5

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
