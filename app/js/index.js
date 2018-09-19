$(document).ready(function(){
    const slider = $('#hammer-slider').HammerSlider({
      slideSpeed: 60,
      slideShow: true,
      slideInterval: 4000,
      dots: true,
      mouseDrag: false,
      beforeSlideChange: (targetSlide) => {
        console.log('Changing to slide number: ' + targetSlide);
      }
    });
});
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: 50
});
