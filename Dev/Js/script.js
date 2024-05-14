// script.js

// Función para abrir el mensaje
function openMessage() {
    document.getElementById('message').style.display = 'block';
}

// Función para cerrar el mensaje
function closeMessage() {
    document.getElementById('message').style.display = 'none';
}

// Evento de clic en el sobre para abrir el mensaje
document.getElementById('envelope').addEventListener('click', function() {
    openMessage();
});

// Generación de corazones
window.onload = function() {
    const heartsContainer = document.querySelector('.hearts-container');
    const hearts = document.querySelector('.hearts');

    // Función para crear corazones
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración de la animación aleatoria
        hearts.appendChild(heart);

        // Eliminar el corazón después de la animación
        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    }

    // Generar corazones cada cierto intervalo de tiempo
    setInterval(createHeart, 1000);
};
