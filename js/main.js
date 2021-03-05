$(function(){
   
   $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $('.blog__slider-items').slick({
      arrows: false,
      dots: true,
   });

   $('.menu__btn, .menu__list-link').on('click', function(){
      $('.menu').toggleClass('menu--active')
   })

   var mixer = mixitup('.gallery__content');

});