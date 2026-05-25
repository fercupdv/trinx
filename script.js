// Función para actualizar dinámicamente el bloque de álbumes
function mostrarInfo(albumNombre) {
    const display = document.getElementById('album-display');
    
    if (display) {
        display.style.opacity = 0;
        
        setTimeout(() => {
            display.innerHTML = `Cargando pistas de: <strong>${albumNombre}</strong>. Explora sus plataformas oficiales abajo.`;
            display.style.opacity = 1;
        }, 200);
    }
}

// Efecto interactivo de espaciado en el título al hacer scroll
window.addEventListener('scroll', () => {
    const heroH1 = document.querySelector('.hero h1');
    if (heroH1) {
        let value = window.scrollY;
        heroH1.style.letterSpacing = (8 + value * 0.04) + 'px';
    }
});