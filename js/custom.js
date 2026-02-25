


$(document).ready(function(){
	$(".open-input").click(function(){
		$(".hide-input").fadeIn(500);
		$(".open-input").hide();
	});


	$(".hide-input").click(function(){
		$(".hide-content").fadeIn(500);
		$("a.close-content").show();
	});
	$("a.close-content").click(function(){
		$(".hide-content").hide();
		$("a.close-content").hide();
	});

	$(".read-more").click(function(){
		$(".open-more").show();
		$(".read-more").hide();
	});
 $(".read-less").click(function(){
 	 $(".open-more").hide();
 	 $(".read-more").show();
 });


 $(".banner-button").click(function(){
   $(".hide-section").show();
   $(".hide-title").show();

   $(".hide-title").click(function(){
      $(".hide-section").hide();
      $(".hide-title").hide();
   })
 });

$(".logo-left").click(function(){
    $(".logo-left").hide();
       $(".logo-right").show();
    $(".mid-left").animate({
        left: 0
    });
});
$(".logo-right").click(function(){
     $(".logo-right").hide();
    $(".logo-left").show();
    $(".mid-left").animate({
        left: -350
    });
    
});

$(".menu-open").click(function(){
   $(".menu").animate({
      right: 0
   });
})
 $(".close-menu").click(function(){
   $(".menu").animate({
      right: "-75%"
   });
});

$(".s-right .btn").click(function(){
    $(".popup-section").fadeIn(500);
});
$(".popup-close").click(function(){
    $(".popup-section").fadeOut(500)
});

$(".open-popup").click(function(){
    $(".about-popup").fadeIn(500);
    $("body").addClass('about');
});
$(".a-close").click(function(){
    $(".about-popup").fadeOut(500);
    $("body").removeClass('about');
});

})


jQuery(document).ready(function($){
  $( ".card .flipButton" ).click(function() {
    $( this ).closest(".card").toggleClass( "flip" );
  });
});




$('.hide-tab ul li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.hide-tab ul li').click(function(){
  $('.hide-tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


$('.banner-tab ul li:first-child').addClass('active');
$('.banner-one').hide();
$('.banner-one:first').show();

// Click function
$('.banner-tab ul li').click(function(){
  $('.banner-tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.banner-one').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


$('.top-tab ul li:first-child').addClass('active');
$('.top-content').hide();
$('.top-content:first').show();

// Click function
$('.top-tab ul li').click(function(){
  $('.top-tab ul li').removeClass('active');
  $(this).addClass('active');
  $('.top-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});




$(document).ready(function(){
     function AddReadMore() {
      //This limit you can set after how much characters you want to show Read More.
      var carLmt = 100;
      // Text to show when text is collapsed
      var readMoreTxt = " ...read more";
      // Text to show when text is expanded
      var readLessTxt = " read less";


      //Traverse all selectors with this class and manupulate HTML part to show Read More
      $(".add-read-more").each(function () {
         if ($(this).find(".first-section").length)
            return;

         var allstr = $(this).text();
         if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
         }
      });

      //Read More and Read Less Click Event binding
      $(document).on("click", ".read-more,.read-less", function () {
         $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
      });
   }

   AddReadMore();
});


$('.hide-tabs ul li:first-child').addClass('active');
$('.hide-sec').hide();
$('.hide-sec:first').show();

// Click function
$('.hide-tabs ul li').click(function(){
  $('.hide-tabs ul li').removeClass('active');
  $(this).addClass('active');
  $('.hide-sec').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

 (function($){
        $(document).ready(function(){
            $(".review-top").mCustomScrollbar();
        });
    })(jQuery);

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        600:{
            items:6
        },
        1000:{
            items:5
        }
    }
})


