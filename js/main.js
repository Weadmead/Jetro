$(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/slider/prev-arrow.svg" alt=""></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/slider/next-arrow.svg" alt=""></button>',
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu ul").slideToggle();
  });
});
