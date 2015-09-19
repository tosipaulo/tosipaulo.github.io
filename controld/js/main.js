$(document).ready(function() {
	//Menu
  var largura = $(window).width(); // largura do viewport
  var altura  = $(window).height();
  var nav = $('.menu-banner');


  $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            nav.addClass("f-nav");
            $('.nav').css('positon', 'relative');
            //$('.title-page').addClass('title-page-fixed');
        } else {
            nav.removeClass("f-nav");
            $('.nav').css('positon', 'absolute');
            //$('.title-page').removeClass('title-page-fixed');
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

  $('#view-video').click(function (e) {
    $('#modal-video').modal();

    return false;
  });


  $('#content').on('click', function(e){
    e.preventDefault();
    $(this).addClass('btn-blue-sidebar-active');
    $('.text-dooht, .text-performance').hide()
    $('.text-about').show();
    $('#dooht, #perfomance').removeClass('btn-blue-sidebar-active');
  });

  $('#dooht').on('click', function(e){
    e.preventDefault();
    $(this).addClass('btn-blue-sidebar-active');
    $('.text-dooht').show();
    $('.text-performance, .text-about').hide();
    $('#content, #perfomance').removeClass('btn-blue-sidebar-active');
  });

  $('#perfomance').on('click', function(e){
    e.preventDefault();
    $(this).addClass('btn-blue-sidebar-active');
    $('.text-dooht, .text-about').hide();
    $('.text-performance').show();
    $('#content, #dooht').removeClass('btn-blue-sidebar-active');
  });


});