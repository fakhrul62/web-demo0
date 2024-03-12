$(function () {  
  
  //   Counter
   $('.counter').counterUp({
    delay: 5,
    time: 3000
});

 //    Animation Scroll
 var html_body = $('html, body');
 $('.menu a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 0
             }, 500);
             return false;
         }
     }
 });


//   Hero Slider

 $(document).ready(function(){
    $('.hero-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-thin fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-thin fa-chevron-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  }); 
  
  $(document).ready(function(){
    $('.testi-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-thin fa-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-thin fa-chevron-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });



  lightbox.option({
    'resizeDuration': 400,
    'wrapAround': false,
    fadeDuration: 100,
    imageFadeDuration: 100,
    'disableScrolling': true,
    fitImagesInViewport: true,
    positionFromTop: 200

  })











});