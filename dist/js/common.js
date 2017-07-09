$(document).ready(function(){
  



  var owl = $('.slider-1');
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


  var owl1 = $('.slider-2');
      owl1.owlCarousel({
        margin: 10,
        items:4,
        itemMargin:0,
        center:true,
        loop: true,
        autoplay:true,
        stagePadding: 220,
        smartSpeed:1000,
        responsive: {
          0: {
            items: 1,
            margin: 10
          },
          600: {
            items: 2,
            margin:10
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