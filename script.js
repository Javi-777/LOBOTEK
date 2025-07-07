
  // --------------------------
// MENÚ RESPONSIVE (para móviles)
// --------------------------

// Selecciona el botón que abrirá/cerrará el menú (usualmente un ícono tipo hamburguesa)
const toggleBtn = document.getElementById('menu-toggle');

// Selecciona el contenedor del menú que se muestra/oculta en móviles
const mobileMenu = document.getElementById('mobile-menu');

// Al hacer clic en el botón, alternamos la clase 'hidden' al menú móvil
toggleBtn.addEventListener('click', () => {
  // Si el menú está oculto, se muestra; si está visible, se oculta
  mobileMenu.classList.toggle('hidden');
});


// --------------------------
// SLIDER AUTOMÁTICO (cambia imágenes cada 4 segundos)
// --------------------------

// Selecciona todas las imágenes que forman parte del slider (deben tener clase .slider-image)
const slides = document.querySelectorAll('.slider-image');

// Variable para llevar el control de la imagen actual que se está mostrando
let currentSlide = 0;

// Ejecuta una función cada 4 segundos (4000 milisegundos)
setInterval(() => {
  // Oculta la imagen actual quitando la clase de opacidad máxima
  slides[currentSlide].classList.remove('opacity-100');
  slides[currentSlide].classList.add('opacity-0');

  // Calcula el índice de la siguiente imagen (vuelve a 0 cuando llega al final)
  currentSlide = (currentSlide + 1) % slides.length;

  // Muestra la nueva imagen agregando la clase de opacidad máxima
  slides[currentSlide].classList.remove('opacity-0');
  slides[currentSlide].classList.add('opacity-100');
}, 4000);

 function toggleProductos() {
    const extras = document.querySelectorAll('.extra-producto');
    const btn = document.getElementById('toggle-btn');
    const mostrando = extras[0].classList.contains('hidden');

    extras.forEach(el => el.classList.toggle('hidden'));

    btn.textContent = mostrando ? 'Ver menos' : 'Ver todos';
  }