$(document).ready(function(){
    $('.header').height($(window).height());
  })

  $('.nav-link').click(function(){    
    var divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 54
    }, 100);
  })

  // scroll functions
  $(document).ready(function () {
    var previousScroll = 0;
    $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll < 100) {
        showTopNav();
      } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
        if (currentScroll > previousScroll) {
          hideNav();
        } else {
          showNav();
        }
        previousScroll = currentScroll;
      }
    });

    function hideNav() {
      $(".navbar").removeClass("is-visible").addClass("is-hidden");
    }

    function showNav() {
      $(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
    }
});