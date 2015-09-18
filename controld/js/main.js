$(document).ready(function() {
	//Menu
  var largura = $(window).width(); // largura do viewport
  var altura  = $(window).height();
  var nav = $('.barra-menu-red');

  $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scrollTop").fadeIn();
        } else {
            $(".scrollTop").fadeOut();
        }


    });

    
    $(".scrollTop").click(function() {
        $('html, body').animate({
          scrollTop : 0
        }, 'show');
      });


  $('.nav-toggle').on('click', function() {
    $('.nav-content').slideToggle(350);
    $('.nav-content').css('display', 'block');
  });


  $('.flexslider').flexslider({
      animation: "slide",
      manualControls: "",
      start: function(slider){
          $('body').removeClass('loading');
      }
  });


});