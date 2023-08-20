const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 700,
  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
    shadows: true,
    shadowOffset: 20,
    shadowScale: 0.9,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' +
              '<span class="swiper-pagination-decor"> - </span>' +
              '<span class="' + totalClass + '"></span>';
    }
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.autoplay.start();
