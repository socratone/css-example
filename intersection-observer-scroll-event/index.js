// IntersectionObserver 를 등록
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 관찰 대상이 viewport 안에 들어온 경우
    if (entry.isIntersecting) {
      entry.target.classList.add('viewed');
    } else {
      entry.target.classList.remove('viewed');
    }
  });
});

// 관찰할 대상을 선언
const sections = document.querySelectorAll('section');
sections.forEach((el) => {
  io.observe(el);
});
