//mobile menu 
var menuButton = document.querySelector(".header-burger");
menuButton.addEventListener('click', function () {
  document.querySelector(".header-menu").classList.toggle('header-menu--mobile');
});



$('.header-menu__link').on('click',function(){
      $('.header-menu').removeClass('header-menu--mobile');
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
    spaceBetween: 20,

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


//modal
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal)

function openModal(){

  var modalOverlay = $('.modal');
  var modalDialog = $('.modal__content');
  modalOverlay.addClass('modal--active');
  modalDialog.addClass('modal__content--active');
  // $('body').css('overflow', 'hidden');

}


  $(document).on('keydown', function (e) {

    if (e.keyCode == 27) {
      var modalOverlay = $('.modal');
      var modalDialog = $('.modal__content');
      modalOverlay.removeClass('modal--active');
      modalDialog.removeClass('modal__content--active');
    // $('body').css('overflow', 'auto');

    }


  });

$(document).on('click', function (e) {
  
    if ($(e.target).is('.modal')) {
        var modalOverlay = $('.modal');
      var modalDialog = $('.modal__content');
      modalOverlay.removeClass('modal--active');
      modalDialog.removeClass('modal__content--active');
      // $('body').css('overflow', 'auto');

    }

});

function closeModal(event){
  event.preventDefault();
  var modalOverlay = $('.modal');
  var modalDialog = $('.modal__content');
  modalOverlay.removeClass('modal--active');
  modalDialog.removeClass('modal__content--active');
// $('body').css('overflow', 'auto');
  
}
//validation
$.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[а-я\s]+$/i.test(value);
    },
    "Только кириллические буквы"
  );

  jQuery.validator.addMethod(
    "emailfull",
    function (value, element) {
      return (
        this.optional(element) ||
        /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
          value
        )
      );
    },
    "Формат почты: name@domain.com"
  );

$('.form').each(function(){
$(this).validate({
  errorClass: "error",
  rules: {
    name: {
      lettersonly: true,
    },
    email: {
      emailfull: true,
    },
    subscribe:{
      emailfull: true,
    }
  },
  messages: {
    name: {
      required: "Пожалуйста, введите ваше имя",
      name: "Имя должно быть не меньше 2 букв",
      minlength: "Имя должно быть не меньше 2 букв",
    },
    email: {
      required: "Нам нужен ваш электронный адрес для связи",
      email: "Ваш электронный адрес в формате: name@domain.com"
    },
    phone: {
      required: "Нам нужен ваш телефон для верификации",
      minlength: "Ваш номер должен быть не меньше стандартного",
    },
    subscribe: {
      required: "Нам нужен ваш электронный адрес для связи",
      subscribe: "Электронный адрес в формате: name@domain.com"
    },
  },
});
});

  $('[type="tel"]').mask("+7 (000)-000-0000");


  // let disabledScroll = function () {
  //   let paddingOffset =  windows.innerWidth - document.body.offsetWidth + ('px');
  //   console.log(paddingOffset);
  //   document.body.classList.add('disable--scroll');
  //   document.body.style.paddingRight = paddingOffset;
  // }

  // let enableScroll = function () {
  //   document.body.classList.remove('disable--scroll');
  // }

// showModal(); // Ваша функция отображения окна
// const prevent = ev => ev.preventDefault();
// document.addEventListener('wheel', prevent, {passive: false});
// // ...
// // в вашей функции закрытия окна:
// document.removeEventListener('wheel', prevent);


// document.body.classList.add('notOverflow');
// document.getElementById('close').onclick = () => {
//     document.querySelectorAll('.modal, .modal__content').forEach(node => node.classList.add('hide'));
//     document.body.classList.remove('notOverflow');
// }
