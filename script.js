// script.js

let isDragging = false;
let startY;
let initialScrollTop;

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  initialScrollTop = window.pageYOffset || document.documentElement.scrollTop;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaY = e.clientY - startY;
    const newScrollTop = initialScrollTop - deltaY;

    window.scrollTo({
      top: newScrollTop,
      behavior: 'smooth' // Puedes ajustar a 'smooth' si quieres un desplazamiento suavizado
    });
  }
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.image-section img');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const controls = document.getElementById('controls');

// Mostrar la primera imagen
showImage(currentImageIndex);

// Event listeners para los botones de control
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

// Mostrar la imagen anterior
function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
}

// Mostrar la siguiente imagen
function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
}

// Mostrar una imagen específica
function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });

    // Actualizar estado de los botones
    updateControls();
}

// Actualizar estado de los botones
function updateControls() {
    prevButton.classList.toggle('active', currentImageIndex > 0);
    nextButton.classList.toggle('active', currentImageIndex < images.length - 1);
}

// Siempre mostrar botones
controls.style.display = 'flex';