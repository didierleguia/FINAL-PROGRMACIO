// imagenes de los departamentos
const proyectos = [
    { imagen: 'img/1.jpg'},
    { imagen: 'img/2.jpg'},
    { imagen: 'img/3.jpg'},
    { imagen: 'img/4.jpg'},
    { imagen: 'img/5.jpg'},
    { imagen: 'img/6.jpg'},
    { imagen: 'img/7.jpg'},
    { imagen: 'img/8.jpg'},
    { imagen: 'img/9.jpg'},
    { imagen: 'img/10.jpg'}
];

let indiceActual = 0;
        // proyecto de cotizacion//
        function mostrarProyecto() {
            const imagenElement = document.getElementById('imagen');
            const detallesElement = document.getElementById('detalles');
            const infoAdicionalElement = document.getElementById('infoAdicional');

            imagenElement.src = proyectos[indiceActual].imagen;
            detallesElement.textContent = proyectos[indiceActual].detalles;

            // mensaje  en la imagen final//
            if (indiceActual === proyectos.length - 1) {
                infoAdicionalElement.style.display = 'block';
            } else {
                infoAdicionalElement.style.display = 'none';
            }
        }
        // funcionamiento de los botones para las imagenes//
        function siguienteProyecto() {
            indiceActual = (indiceActual + 1) % proyectos.length;
            mostrarProyecto();
        }

        function anteriorProyecto() {
            indiceActual = (indiceActual - 1 + proyectos.length) % proyectos.length;
            mostrarProyecto();
        }

        mostrarProyecto();
