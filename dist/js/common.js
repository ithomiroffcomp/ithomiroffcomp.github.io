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

      $('#popup').magnificPopup({
          type: 'inline',

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: 'auto',

          closeBtnInside: true,
          preloader: false,
          
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
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
$(document).ready(function(){
  var owl_two = $('.slider-2');
      owl_two.owlCarousel({
        margin: 10,
        loop: true,
        nav:false,
        autoplay: true,
        smartSpeed:1000,
        responsive: {
          0: {
            items: 2,
            margin:150
          },
          600: {
            items: 3,
            margin:150
          },
          1000: {
            items: 5,
            margin:150
          }
        }
      });
});