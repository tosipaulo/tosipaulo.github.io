$(document).ready(function() {
	//Menu
  var largura = $(window).width(); // largura do viewport
  var altura  = $(window).height();

  var altura  = $(window).height(); // altura do viewport 
  //$('.menu').before("<span class='nav-toggle'>Menu <i class='fa fa-bars'></i></span>");
  //$('.nav-toggle').hide();
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