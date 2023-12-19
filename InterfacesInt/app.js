let app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0xFFFFFF });
document.getElementById('animacion').appendChild(app.view);


let imagenes = [
    'imagenes/imagen_1.png',
    'imagenes/imagen_2.png',
    'imagenes/imagen_3.png',
    'imagenes/imagen_4.png',
    'imagenes/imagen_5.png',
    'imagenes/imagen_6.png',
    'imagenes/imagen_7.png',
    'imagenes/imagen_8.png',
];

let currentImageIndex = 0;
let categoriaActual = ''; // Variable para almacenar la categoría actual

function loadNewImage() {
    let imageElement = document.createElement('img');
    imageElement.src = imagenes[currentImageIndex];

    let contenedor = document.getElementById('animacion');
    contenedor.innerHTML = '';
    contenedor.appendChild(imageElement);
}

loadNewImage();

function actualizarImagen(indice) {
    currentImageIndex = indice;
    loadNewImage();
}

const nlp = window.nlp;
let data;

fetch('http://127.0.0.1:3000/based.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));

function obtenerRecomendacionAleatoria(categoria, esRecomendado) {
    const lista = esRecomendado ? data[categoria].Recomendados : data[categoria].NoRecomendados;
    const recomendacionAleatoria = lista[Math.floor(Math.random() * lista.length)];
    return recomendacionAleatoria;
}

function mostrarRecomendacionEnLabel(recomendacion) {
    const label = document.getElementById('imagenLabel');
    label.textContent = `Nombre: ${recomendacion.nombre}\nDescripción: ${recomendacion.descripcion}`;
}

document.getElementById('brecomendado').addEventListener('click', function() {
    const botonRecomendado = document.getElementById('brecomendado');
    const botonNoRecomendado = document.getElementById('bnoRecomendado');

    botonRecomendado.disabled = true;  // Deshabilitar el botón de "Recomendado"
    botonNoRecomendado.disabled = false;  // Habilitar el botón de "No Recomendado"

    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
    seleccionarInteraccionconindice(4);
});

document.getElementById('bnoRecomendado').addEventListener('click', function() {
    const botonRecomendado = document.getElementById('brecomendado');
    const botonNoRecomendado = document.getElementById('bnoRecomendado');

    botonRecomendado.disabled = false;  // Habilitar el botón de "Recomendado"
    botonNoRecomendado.disabled = true;  // Deshabilitar el botón de "No Recomendado"

    const noRecomendacion = obtenerRecomendacionAleatoria(categoriaActual, false);
    mostrarRecomendacionEnLabel(noRecomendacion);
});

// Agregar eventos de clic para los botones de categorías
document.getElementById('anemiaButton').addEventListener('click', function() {
    categoriaActual = 'Anemia';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('infeccionesButton').addEventListener('click', function() {
    categoriaActual = 'Infecciones';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('coagulacionButton').addEventListener('click', function() {
    categoriaActual = 'Coagulación';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('hepaticosButton').addEventListener('click', function() {
    categoriaActual = 'Hepáticos';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('renalesButton').addEventListener('click', function() {
    categoriaActual = 'Renaless';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('tiroideosButton').addEventListener('click', function() {
    categoriaActual = 'Tiroideos';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('cardiacosButton').addEventListener('click', function() {
    categoriaActual = 'Cardiacos';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('deficienciaVitaminasButton').addEventListener('click', function() {
    categoriaActual = 'DeficienciaVitaminas';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

document.getElementById('colesterolButton').addEventListener('click', function() {
    categoriaActual = 'Colesterol';
    const recomendacion = obtenerRecomendacionAleatoria(categoriaActual, true);
    mostrarRecomendacionEnLabel(recomendacion);
});

const intervalo = 5000;

function cambiarImagenAutomaticamente() {
    currentImageIndex = (currentImageIndex + 1) % imagenes.length;
    loadNewImage();
    seleccionarInteraccion();
}

const speechButton = document.getElementById('speechButton');
const textoParaLeer = document.getElementById('imagenLabel');

speechButton.addEventListener('click', () => {
    const texto = textoParaLeer.textContent;
    hablar(texto);
});

function hablar(texto) {
    const speechSynthesisUtterance = new SpeechSynthesisUtterance();
    speechSynthesisUtterance.text = texto;

    window.speechSynthesis.speak(speechSynthesisUtterance);
}
const interacciones = [
    '¡Hola! Soy un diálogo.',
    '¿Cómo estás?',
    '¡Bienvenido!',
    '¿En qué puedo ayudarte?',
    'Recuerda beber suficiente agua durante el día.',
    'Las frutas y verduras son esenciales para una dieta equilibrada.',
    'Evita el consumo excesivo de azúcar y alimentos procesados.',
    'Una buena noche de sueño es crucial para tu bienestar.',
    'Realiza ejercicio regularmente para mantener un cuerpo sano.',
    'No te saltes las comidas, el desayuno es fundamental.',
    'Controla tu consumo de sal para cuidar tu presión arterial.',
    'Las grasas saludables como las del aguacate son beneficiosas.',
    'Consulta a un profesional antes de hacer cambios drásticos en tu dieta.',
    'El estrés puede afectar tu salud, busca actividades que te relajen.',
    'Recuerda descansar al menos 7-8 horas cada noche.',
    'Mantén un equilibrio entre actividad física y descanso.',
    'Los alimentos ricos en fibra son excelentes para la digestión.',
    'Las nueces y semillas son excelentes fuentes de nutrientes.',
    'La meditación y el yoga pueden ayudar a reducir el estrés.',
    'Incorpora alimentos ricos en omega-3 para la salud cerebral.',
    'Las legumbres son una excelente fuente de proteínas vegetales.',
    'Las grasas trans deben evitarse tanto como sea posible.',
    'Los vegetales de hojas verdes son ricos en vitaminas y minerales.',
    'Planifica tus comidas para mantener una dieta equilibrada.',
    'No olvides la importancia de una buena higiene personal.',
    'El consumo moderado de café y té puede tener beneficios para la salud.',
    'Elige el aceite de oliva virgen extra como grasa principal en la cocina.',
    'Mantén la actividad física regular para mantener un corazón saludable.'
];
function mostrarDialogo(texto) {
    const burbujaDialogo = document.getElementById('burbuja1');
    burbujaDialogo.textContent = texto;
    burbujaDialogo.style.display = 'block';
}

// Función para seleccionar una interacción aleatoria del arreglo
function seleccionarInteraccion() {
    const indice = Math.floor(Math.random() * interacciones.length);
    const interaccion = interacciones[indice];
    mostrarDialogo(interaccion);
}
function seleccionarInteraccionconindice(indice) {
    const interaccion = interacciones[indice];
    mostrarDialogo(interaccion);
}

const temporizador = setInterval(cambiarImagenAutomaticamente, intervalo);
