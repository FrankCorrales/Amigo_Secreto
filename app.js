// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function limpiarCampo() {
  document.querySelector('#amigo').value = '';
}

function mostrarLista(lista) {
  const contenedorLista = document.querySelector('#listaAmigos');
  let contenidoHTML = '';

  for (let i = 0; i < lista.length; i++) {
    contenidoHTML += `<li>${lista[i]}</li>`;
  }

  contenedorLista.innerHTML = contenidoHTML;
}

function elegirAmigoSecreto() {
  if (amigos.length === 0) return;

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `El amigo secreto del sorteo es ${amigos[indiceAleatorio]}`;
}

function registrarAmigo() {
  const nombreIngresado = document.getElementById('amigo').value;

  if (nombreIngresado === '') {
    alert('Por favor, inserte un nombre válido');
  } 
  else if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreIngresado)) {
    amigos.push(nombreIngresado);
    mostrarLista(amigos);
  } 
  else {
    alert('Por favor, ingresa un nombre válido');
  }

  limpiarCampo();
}
