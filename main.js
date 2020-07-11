$(document).ready(function(){
    $('.header').height($(window).height());
  });

// modal click
  $(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});

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