$(document).ready(function(){
    $('.header').height($(window).height());
  });


  
$(".animated").addClass("delay-1s");


// loader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1200);
}


function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}; 
  
// modal clicks
  $(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});

  // scroll function for navbar
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

//show more modals
$(".project-box").hide();
var count =  $(".project-box").length;

var i = 1;
$("button").on("click" , function() {
    i = i + 5;    
    $(".project-box:lt(" + i + ")").show();
    if(i > count){
        $("button").hide();
    }
});