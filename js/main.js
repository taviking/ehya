//mobile menu 
var menuButton = document.querySelector(".header-burger");
menuButton.addEventListener('click', function () {
  document.querySelector(".header-menu").classList.toggle('header-menu--mobile');
});

// change color heart
var menuButton = $(".recommended-card__heart-img");
menuButton.on("click", function () {  
  $(this).toggleClass("recommended-card__heart-img--active");
}); 

//swiper
  // slider Category
  const categorySlider = new Swiper('.category-slider', {
    slidesPerColumnFill: 'row',

    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    navigation: {
      nextEl: '.slider-category__button--next',
      prevEl: '.slider-category__button--prev',
      disabledClass: 'slider-category__button-disabled',
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 9
      },
      510: {
        slidesPerView: 2,
        slidesPerColumn: 2,
      },  
      767: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 10
      },
      1030: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 20
      },
    },
  });

  // slider Unreleased
  const unreleasedSlider = new Swiper('.unreleased-slider', {
    slidesPerView: 5,
    spaceBetween: 30,

    simulateTouch: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    navigation: {
      nextEl: '.slider-unreleased__button--next',
      prevEl: '.slider-unreleased__button--prev',
      disabledClass: 'slider-unreleased__button-disabled',
    },

    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 5
      }
    },
  });

// smooth scrolling
var $page = $('html, body');
$('a[href="#recommended"]').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});
var $page = $('html, body');
$('a[href="#unreleased"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
  });
var $page = $('html, body');
$('a[href="#blog"]').click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

//up button
var btn = $(".arrow-up");  
$(window).scroll(function() {     
  if ($(window).scrollTop() > 700) {
    btn.addClass("arrow-up--show");
  } else {
    btn.removeClass("arrow-up--show");
  }
});
$(".arrow-up").click(function() {
  $("body,html").animate({scrollTop:0},700);
});