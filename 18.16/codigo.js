//18.16

function anade(){
  const miLista = document.getElementById('lista');

  const nuevoElemento = document.createElement('li');

  const textoNuevoElemento = document.createTextNode('Nuevo Elemento');

  nuevoElemento.appendChild(textoNuevoElemento);

  miLista.appendChild(nuevoElemento);
}