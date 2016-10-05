
//test to see whether it conflicts
$("div #imagePlantation").hide();
$("div #imagePlantation").fadeIn(3000);

// Google Maps on the contact page

function initMap() {
        var AmsterdamCity = {lat: 52.341099, lng: 4.823463};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: AmsterdamCity
        });
        var marker = new google.maps.Marker({
          position: AmsterdamCity,
          map: map
        });
      }


52.340452, 4.823191

//fadeOut image/fadeIn tekst
$(document).ready(function(){
	$(".textPlantation").hide();

	// $("body").scroll(function(){
	// 	console.log('scroll triggered')
	// 	$("#imagePlantation").fadeOut(3000);
	// });
	$(document).on( 'scroll', function(){
		console.log('Event Fired');
	});

	$("#imagePlantation").click(function(){
		$(".textPlantation").fadeIn(3000);
	});
})

//gebruik evt css manipulation
//de formule hierboven geeft nu aan hoevaak er gescrolld is.

//Dit is dat hij outfade als je een lange pagina hebt. dus helaas niet wat we zoeken.
// $(window).scroll(function () {
//     var scrollTop = $(window).scrollTop();
//     var height = $(window).height();
//     $("#imagePlantation").css({
//         'opacity': ((height - scrollTop) / height)
//     });
// });


// $("#imagePlantation").animate({ height: 'toggle', opacity: 'toggle' }, 5000);
// $("#imagePlantation").animate({ height: 0, opacity: 0 }, 5000);

// function slideFade(elem) {
//    var fade = { opacity: 1, transition: 'opacity 0.5s' };
//    elem.css(fade).slideUp(5000);
//    }
// slideFade($('#imagePlantation'));






// $(window).scroll(function() {
//     $("#imagePlantation").css({
//     'opacity' : 1-(($(this).scrollTop())/100)
//     });          
// });

