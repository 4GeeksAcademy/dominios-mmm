const parrafo = document.getElementById('miParrafo');
const boton = document.getElementById('miBoton');

boton.addEventListener('click', function() {
    parrafo.textContent = '¡El contenido del párrafo ha cambiado!';
});