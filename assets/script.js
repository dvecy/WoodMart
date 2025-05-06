document.addEventListener("DOMContentLoaded", function() {
    let track = document.querySelector('.slide-track');
    let btnPrev = document.querySelector('.prev');
    let btnNext = document.querySelector('.next');
    let currentIndex = 0;
    let slideWidth = 200; 
    let slideMargin = 10; 
  
    btnPrev.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex - (slideMargin * currentIndex)) + 'px)';
      }
    });
  
    btnNext.addEventListener('click', function() {
      if (currentIndex < (track.children.length - 1)) {
        currentIndex++;
        track.style.transform = 'translateX(' + (-slideWidth * currentIndex - (slideMargin * currentIndex)) + 'px)';
      }
    });
  });
  
