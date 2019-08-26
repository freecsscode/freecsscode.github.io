(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    $('html, body').animate({
      scrollTop: (target.offset().top - 72)
    }, 1000, "easeInOutExpo");
    return false;
  });

})(jQuery); // End of use strict