const textElement = document.getElementById('text');

const isEllipsisActive = (element) => {
  return element.offsetWidth < element.scrollWidth;
};

window.addEventListener('resize', () => {
  if (isEllipsisActive(textElement)) {
    textElement.style.backgroundColor = 'dodgerblue';
  } else {
    textElement.style.backgroundColor = '';
  }
});
