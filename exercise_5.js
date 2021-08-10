"use strict";

var boton = document.getElementById('boton')
var contenedor = document.getElementById('contenedor')
var post = null;

boton.addEventListener('click', () => {

})


function mostrarDatos(post) {
  post.map((post, i) => {
    let titulo = document.createElement('h1')
    let contenido = document.createElement('p')
    titulo.innerHTML = (i + 1) + "-" + post.title;
    contenido.innerHTML = post.body;
    contenedor.appendChild(titulo)
    contenedor.appendChild(contenido)
  })
}