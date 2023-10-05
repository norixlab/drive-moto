$(function () {

// ------------- SLIDERS ------------- //

  $(".banner-section__slider").slick({
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: true,
    prevArrow:
      '<button class="banner-slider__btn banner-slider__btn--left"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-slider__btn banner-slider__btn--right"><img src="images/arrow-right.svg" alt=""></button>',
  });

  $('.product-slider').slick({
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,

    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__btn product-slider__btn--left"><img src="images/arrow-left-dark.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__btn product-slider__btn--right"><img src="images/arrow-right-dark.svg" alt=""></button>',
  });

  $('.popular-slider').slick({
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,

    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="product-slider__btn product-slider__btn--left"><img src="images/arrow-left-dark.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__btn product-slider__btn--right"><img src="images/arrow-right-dark.svg" alt=""></button>',
  });
// ------------- TABS ------------- //

  $(".search__tabs-item").on("click", function(e){
    e.preventDefault();

    $(".search__tabs-item").removeClass("search__tabs-item--active");
    $(".search__content-item").removeClass("search__content-item--active");

    $(this).addClass("search__tabs-item--active");
    $($(this).attr("href")).addClass("search__content-item--active");
  });

 

  $(".products__tab").on("click", function(e){
    e.preventDefault();

    $(".products__tab").removeClass("products__tab--active");
    $(".products__tab-content").removeClass("products__tab-content--acvtive");

    $(this).addClass("products__tab--active");
    $($(this).attr("href")).addClass("products__tab-content--acvtive");
  });

  $(".populars__tab").on("click", function(e){
    e.preventDefault();

    $(".populars__tab").removeClass("populars__tab--active");
    $(".populars__tab-content").removeClass("populars__tab-content--acvtive");

    $(this).addClass("populars__tab--active");
    $($(this).attr("href")).addClass("populars__tab-content--acvtive");
  });

  $(".product-item__favorite").on("click", function(){
    $(this).toggleClass("product-item__favorite--active");
   
  });
  
});

