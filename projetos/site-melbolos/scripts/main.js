"use strict";jQuery(document).ready(function(){$(".lateral__menu").before('<a class="lateral__abremenu"><i class="fa fa-bars"></i></a>'),$(".lateral__abremenu").click(function(){$(".lateral__menu").toggleClass("hide show")}),$(".lateral__abremenu i").click(function(){$(this).toggleClass("fa fa-bars"),$(this).toggleClass("fa fa-close")})});