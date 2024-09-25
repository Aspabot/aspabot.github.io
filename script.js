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
      behavior: 'smooth'
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