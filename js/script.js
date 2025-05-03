$(document).ready(function () {
  // Inicializa o slider
  if ($(".slider").length) {
    $(".slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnFocus: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });

    // Reinicia as animações quando o slide muda
    $(".slider").on("afterChange", function() {
      $(".slide__copy__container").addClass("animate-slideInLeft");
      $(".btn--slide").addClass("animate-scaleIn delay-1");
    });
  }

  // Inicializa o contador
  if ($(".counter__number").length) {
    $(".counter__number").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  // Adiciona classe ativa ao link do menu quando clicado
  $(".navbar__links a").click(function() {
    $(".navbar__links a").removeClass("active");
    $(this).addClass("active");
  });

  // Toggle do menu mobile
  $(".navbar__menu-btn").click(function() {
    $(".navbar__links").toggleClass("active");
  });

  // Anima elementos quando eles entram na viewport
  function animateOnScroll() {
    $("[class*='animate-']").each(function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).css("opacity", "1");
      }
    });
  }

  // Executa a animação quando a página carrega e quando o usuário rola
  animateOnScroll();
  $(window).scroll(animateOnScroll);
}); 