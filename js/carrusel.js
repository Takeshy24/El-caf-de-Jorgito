const carousel = document.querySelector('#carousel > div');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let currentSlide = 0;
const totalSlides = 2;

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
});