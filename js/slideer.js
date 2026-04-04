// слайдер
const slides = document.querySelector('.slides');

const slideCount = document.querySelectorAll('.slide').length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function goToSlide(index){
  if (index < 0){
    index = slideCount - 1
  }else if (index >= slideCount){
    index = 0;
  }
  currentIndex = index;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click',() => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click',() => {
  goToSlide(currentIndex + 1);
});

goToSlide(0);