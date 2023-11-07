//18.14

const enlaces = document.querySelectorAll('a');
console.log('Número de enlaces de la página:', enlaces.length);

if (enlaces.length >= 2) {
    const penultimoEnlace = enlaces[enlaces.length - 2];
    const direccionPenultimoEnlace = penultimoEnlace.href;
    console.log('Dirección a la que enlaza el penúltimo enlace:', direccionPenultimoEnlace);
}

const enlacesAHttpPrueba = document.querySelectorAll('a[href="http://prueba/"]');
console.log('Número de enlaces que enlazan a http://prueba:', enlacesAHttpPrueba.length);

const tercerParrafo = document.getElementsByTagName('p')[2];
const enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName('a');
console.log('Número de enlaces del tercer párrafo:', enlacesEnTercerParrafo.length);
