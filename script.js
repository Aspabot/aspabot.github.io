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

// JavaScript
document.addEventListener('mousedown', () => {
  document.body.classList.add('clicking');
  document.querySelectorAll('a, .control-button').forEach(element => {
      element.classList.add('clicking');
  });
});

document.addEventListener('mouseup', () => {
  document.body.classList.remove('clicking');
  document.querySelectorAll('a, .control-button').forEach(element => {
      element.classList.remove('clicking');
  });
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

// Cambiar la imagen de los botones al hacer click
prevButton.addEventListener('mousedown', () => {
  prevButton.style.backgroundImage = "url('images/arrow_prev_pushed.png')";
});
prevButton.addEventListener('mouseup', () => {
  prevButton.style.backgroundImage = "url('images/arrow_prev.png')";
});
prevButton.addEventListener('mouseout', () => {
  prevButton.style.backgroundImage = "url('images/arrow_prev.png')";
});

nextButton.addEventListener('mousedown', () => {
  nextButton.style.backgroundImage = "url('images/arrow_next_pushed.png')";
});
nextButton.addEventListener('mouseup', () => {
  nextButton.style.backgroundImage = "url('images/arrow_next.png')";
});
nextButton.addEventListener('mouseout', () => {
  nextButton.style.backgroundImage = "url('images/arrow_next.png')";
});

// Mostrar la imagen anterior
function showPrevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

// Mostrar la siguiente imagen
function showNextImage() {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

// Mostrar una imagen específica
function showImage(index) {
  const imageWidth = images[0].getBoundingClientRect().width;
  const offset = -index * imageWidth;
  images.forEach((img) => {
      img.style.transform = `translateX(${offset}px)`;
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