(function ($) {
    $(document).ready(function(){
      
      $("#navbar").hide();
      
      $(function () {
          $(window).scroll(function () {
              // set distance user needs to scroll before we fadeIn navbar
              if ($(this).scrollTop() > 500) {
                  $('#navbar').fadeIn();
              } else {
                  $('#navbar').fadeOut();
              }
          });
  
      
      });

      $(".top").hide();
      
      $(function () {
          $(window).scroll(function () {
              // set distance user needs to scroll before we fadeIn navbar
              if ($(this).scrollTop() > 500) {
                  $('.top').fadeIn();
              } else {
                  $('.top').fadeOut();
              }
          });
  
      
      });
  
  });
    }(jQuery));