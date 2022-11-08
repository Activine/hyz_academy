$(document).ready(function () {
  $('.courses__item-inner').slick({
    arrows: true,
    slidesToShow: 3,
    speed: 250,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><svg class="icon__prev" width="24" height="24"><use href="./assets/icons/symbol-defs.svg#icon-slide-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><svg class="icon__next" width="24" height="24"><use href="./assets/icons/symbol-defs.svg#icon-slide-right"></use></svg></button>',
    responsive: [{
      breakpoint: 825,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 604,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});