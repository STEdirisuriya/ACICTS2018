(function ($) {
    "use strict";


    /* ==========================================================================
      COUNTER UP 
 ========================================================================== */

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.carousel').carousel({
      interval: 8000,
    })
    
    /* Closes the Responsive Menu on Menu Item Click*/
    $('.navbar-collapse .navbar-nav a').on('click', function () {
        $('.navbar-toggler:visible').click();
    });
    /*END MENU JS*/

    
    /* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.site-navigation,.trans-navigation').addClass('header-white');
        } else {
            $('.site-navigation,.trans-navigation').removeClass('header-white');
        }



    });
    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.smoth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });



    /* ==========================================================================
      SCROLL SPY
 ========================================================================== */

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });

new WOW().init();

	


})(window.jQuery);

    //--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition


//--- START NAV-ITEM CLICK EVENTS ---//
// when the user clicks a nav item:
$("#leftSidebar ul li a").click(function (e) {

  e.preventDefault(); // don't jump like a typical html anchor

  // find the index of the "#" character in the href string...
  var startOfName = $(this).attr('href').indexOf("#"),
      // ...then use it as the argument in the slice() method (add 1 so you don't include the # character).
      clickRef = $(this).attr('href').slice(startOfName + 1),
      targetEl = $('a[name=' + clickRef + ']'); // select the element this link is pointing to

  // scroll there smoothly:
  scrollThere(targetEl, 400);

}); // end click
//--- END NAV-ITEM CLICK EVENTS ---//


//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {

  // get Y-axis value of each div:
  var div1y = $('#intro').offset().top,
      div2y = $('#service').offset().top,
      div3y = $('#blog').offset().top,
      div4y = $('#counter').offset().top,
      div5y = $('#footer').offset().top,
      // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;

  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if

  // prevent default behavior (page scroll):
  e.preventDefault();

  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#intro');
    targetDown = $('#service');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#intro');
    targetDown = $('#blog');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#service');
    targetDown = $('#counter');
  } else if (lastScrollTop === div4y) {
    targetUp = $('#blog');
    targetDown = $('#footer');
  } else if (lastScrollTop < div2y) {
    targetUp = $('#intro');
    targetDown = $('#service');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#service');
    targetDown = $('#blog');
  } else if (lastScrollTop < div4y) {
    targetUp = $('#blog');
    targetDown = $('#counter');
  } else if (lastScrollTop < div5y) {
    targetUp = $('#counter');
    targetDown = $('#panel5');
  } // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 400);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//


//--- START SHOW/HIDE SIDE PANEL EVENTS ---//
// open the sidePanel when the button is clicked/tapped:
$("#sidePanelButton").click(function (e) {
  e.preventDefault();
  $("#sidePanel").addClass("open");
  $("#mainStack").addClass("shift");
}); // end click

// close the sidePanel when the X is clicked/tapped:
$("#sidePanelClose").click(function (e) {
  e.preventDefault();
  $("#sidePanel").removeClass("open");
  $("#mainStack").removeClass("shift");
}); // end click
