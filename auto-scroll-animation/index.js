const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

function moveRight() {
  if (parent.scrollWidth <= parent.scrollLeft + parent.offsetWidth) {
    parent.scrollLeft = 0;
  } else {
    parent.scrollLeft += 1;
  }
}

setInterval(moveRight, 20);
