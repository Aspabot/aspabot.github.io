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