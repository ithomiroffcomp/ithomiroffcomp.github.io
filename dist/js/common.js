$(document).ready(function(){
  



  var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });



      $('a[href^="#"]').on('click',  function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html,body').animate({
          'scrollTop': $target.offset().top
        },2000,'swing', function() {
          window.location.hash = target;
        });
      });



});