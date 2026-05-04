document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.me-container');
  const image = container.querySelector('img.me');

  container.addEventListener('mousemove', function(e) {
    image.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
  });
});