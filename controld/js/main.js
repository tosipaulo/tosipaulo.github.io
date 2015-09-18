$(document).ready(function() {
	//Menu
  var largura = $(window).width(); // largura do viewport
  var altura  = $(window).height();
  var nav = $('.menu-banner');


  $(window).scroll(function () {
        if ($(this).scrollTop() > 55) {
            nav.addClass("f-nav");
            $('.nav').css('positon', 'relative');
            $('.title-page').addClass('title-page-fixed');
        } else {
            nav.removeClass("f-nav");
            $('.nav').css('positon', 'absolute');
            $('.title-page').removeClass('title-page-fixed');
        }


    });




  $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
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