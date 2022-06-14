const rect = document.querySelector('.rect');

let running = false;

window.addEventListener('scroll', () => {
  if (running) return;
  running = true;
  requestAnimationFrame(() => {
    window.dispatchEvent(new CustomEvent('optimizedScroll'));
    running = false;
  });
});

window.addEventListener('optimizedScroll', () => {
  rect.style.transform = 'rotate(-' + window.pageYOffset + 'deg)';
});
