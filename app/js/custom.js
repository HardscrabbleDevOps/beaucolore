jQuery( window ).scroll(function() {
   if ($(window).scrollTop()  > 80) {
         $( "#mainNav" ).css( "background-color", "white" );
         $( "#mainNav" ).find('span').css( "color", "black" );
         $( ".blackout").css( "color", "black" );
         $( "#logo_white" ).css( "display", "none" );
         $( "#logo_blek" ).css( "display", "inline-block" );
         $( "#logo_minor_blek" ).css( "display", "inline-block" );
     } else {
         $( "#mainNav" ).css( "background-color", "transparent" );
         $( "#mainNav" ).find('span').css( "color", "white" );
         $( ".blackout").css( "color", "white" );
         $( "#logo_white" ).css( "display", "inline-block" );
         $( "#logo_blek" ).css( "display", "none" );
         $( "#logo_minor_blek" ).css( "display", "none" );
    }

    if ($(window).scrollTop()  > 150) {
          $( ".scroll_top" ).css( "display", "block" );
      } else {
          $( ".scroll_top" ).css( "display", "none" );
     }

 });
 jQuery(".scroll_top").click(function() {
     jQuery('html,body').stop().animate({
         scrollTop: jQuery("html,body").offset().top},
         1500);
 });
 jQuery("#home").click(function() {
     jQuery('html,body').stop().animate({
         scrollTop: jQuery("html,body").offset().top},
         1500);
 });
jQuery("#btnSearch").click(function() {
    jQuery('html,body').stop().animate({
        scrollTop: jQuery("#divOne").offset().top - 65},
        1500);
});



(function($){
  $(function(){

    $(".header").load("../app/templates/header.html");
    // $('.button-collapse').sideNav();
    $('.parallax').parallax();


  }); // end of document ready
})(jQuery);
