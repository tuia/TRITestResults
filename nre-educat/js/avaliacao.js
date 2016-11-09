

    $(document).ready(function() {

      var brandColor = $('.btn-primary').css('background-color');


      // ALTERNATIVE SELECTION
      $('.alternative-list .btn').click( function() {
        $(this).parents('.alternative-list').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
      });
     


      //  QUESTION CAROUSEL
      $("#question-carousel").owlCarousel({
        items : 20, //10 items above 1000px browser width
        itemsDesktop : [1000,16], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,12], // betweem 900px and 601px
        itemsTablet: [600,7], //2 items between 600 and 0
        itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
        rewindNav: false,
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        $("#question-carousel").trigger('owl.next');
      })
      $(".prev").click(function(){
        $("#question-carousel").trigger('owl.prev');
      });


      // PIE TIMER
      $('#pie-timer').pietimer({
        seconds: 3600,
        color: "#FFFFFF",
        height: 15,
        width: 15
      });
      $('#pie-timer').pietimer('start');

      //REGULAR TIMER
      function startTimer(duration, display) {
          var timer = duration, minutes, seconds;
          setInterval(function () {
              minutes = parseInt(timer / 60, 10)
              seconds = parseInt(timer % 60, 10);

              minutes = minutes < 10 ? "0" + minutes : minutes;
              seconds = seconds < 10 ? "0" + seconds : seconds;

              display.text(minutes + ":" + seconds);

              if (--timer < 0) {
                  timer = duration;
              }
          }, 1000);
      }

      jQuery(function ($) {
          var sixtyMinutes = 60 * 60,
              display = $('.remaining-time');
          startTimer(sixtyMinutes, display);
      });
     
  });

