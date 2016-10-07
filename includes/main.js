//Entrance carousel philosophy page
$("#myCarousel").hide();

$("#myCarousel")
.css('opacity', 0)
.slideDown(3000)
.animate(
	{ opacity: 1 },
	{ queue: false, duration: 3000 }
	);


// front page JavaScript
$(document).ready(function () {
	$('#frontpage').toggleClass('editor')
});

$(".texttocenter").hide();
$(document).ready(function(){
	$(".texttocenter").fadeIn(4000);
});


//fade in text on mouseover text and fade oud when hover away
$("#frontpagetext1").hide();
$("#frontpagetext2").hide();
$("#frontpagetext3").hide();

$(".frontid1").hover(function(){
	$("#frontpagetext1").fadeIn("slow");
},
function(){
	$("#frontpagetext1").fadeOut(20000);
});

//function2
$(".frontid2").hover(function(){
	$("#frontpagetext2").fadeIn("slow");
},
function(){
	$("#frontpagetext2").fadeOut(20000);
});

//function3
$(".frontid3").hover(function(){
	$("#frontpagetext3").fadeIn("slow");
},
function(){
	$("#frontpagetext3").fadeOut(20000);
});


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

// Contact form functions
$("#submit_button").click(function() {
	alert( "Submit button doesnt work, please teach us php / ajax / how to send a e-mail." );
});

$(document).ready(function(){
	var errors = false;
	$('.required').parent().find('.input').on('blur', function() {
		var error_div = $(this).parent().find('.error_message');
		var field_container = $(this).parent();
		if (!$.empty_field_validation($(this).val())) {
			error_div.html('This field is required.');
			error_div.css('display', 'block');
			field_container.addClass('error');
			errors = true;
		} else {
			error_div.html('');
			error_div.css('display', 'none');
			field_container.removeClass('error');
			errors = false;
		}
	});
	$('#email').on('blur', function(){
		var error_div = $(this).parent().find('.error_message');
		var field_container = $(this).parent();
		if (!$.email_validation($(this).val())) {
			error_div.html('Expected Input: email');
			error_div.css('display', 'block');
			field_container.addClass('error');
			errors = true;
		} else {
			error_div.html('');
			error_div.css('display', 'none');
			field_container.removeClass('error');
			errors = false;
		}
	});
	$('#contact_form').submit(function(event) {
		event.preventDefault();
		$('.required').parent().find('.input').trigger('blur');
		if (!errors)
			$.ajax({
				url: '/echo/json/',
				data: {
					json: JSON.stringify($(this).serializeObject())
				},
				type: 'post',
				success: function(data) {
					var message = 'Hi '+data.name+'. Your message was sent and received.';
					$('#after_submit').html(message);
					$('#after_submit').css('display', 'block');
				},
				error: function() {
					var message = 'Hi '+data.name+'. Your message could not be sent or received. Please try again later';
					$('#after_submit').html(message);
					$('#after_submit').css('display', 'block'); 
				}
			});
		else
			alert("You didn't completed the form correctly. Check it out and try again!");
	});
});

$.empty_field_validation = function(field_value) {
	if (field_value.trim() == '') return false;
	return true;
}

$.email_validation = function(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
$.fn.serializeObject = function()
{
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};


// Webshop
var cart = []
var cartNames = []

$('#jimmy100').click(function(){
	cart.push(100);
	cartNames.push("Jim My Gold");
	console.log("Added Jim My Gold to cart.")
})

$('#jimmy50').click(function(){
	cart.push(50);
	cartNames.push("Jim My Aroma");
	console.log("Added Jim My Aroma to cart.")
})

$('#selma125').click(function(){
	cart.push(125);
	cartNames.push("Sel My Gold");
	console.log("Added Sel My Gold to cart.")
})

$('#selma75').click(function(){
	cart.push(75);
	cartNames.push("Sel My Aroma");
	console.log("Added Sel My Aroma to cart.")
})

$('#cartIcon').click(function(){
	var total = 0
	for(var i = 0; i<cart.length; i++){
		total += cart[i] //+= betekent: het nieuwe totaal is het totaal + de uitkomst van de loop. En dat elke keer weer.
	}
	alert ("You have " + i + " items with a total amount of: \u20AC " + total)

// This will have a new html window popup, but it's ugly as hell.
// var site="You have " + i + " items with a total amount of: \u20AC " + total;
// var popupWindow = window.open("popup.html","","height=200,width=300");
// popupWindow.document.write(site);
// popupWindow.document.close();
})

$('#cartIcon').click(function(){
	var total = 0
	for(var i = 0; i<cartNames.length; i++){
		total += cartNames[i] //+= betekent: het nieuwe totaal is het totaal + de uitkomst van de loop. En dat elke keer weer.
	}
})


$('#cartIcon').click(function(){
	console.log("You have the following items:")
	cartNames.sort();

	var nameItem = null;
	var count = 0;
	for (var i = 0; i < cartNames.length; i++) {
		if (cartNames[i] != nameItem) {
			if (count > 0) {
				console.log(count + " times " + nameItem);
			}
			nameItem = cartNames[i];
			count = 1;
		} else {
			count++;
		}
	}
	if (count > 0) {
		console.log(count + " times " + nameItem);
	}
})






//Old code, for philosophy page, pre caroussel
//IVM CAROUSEL INACTIEFfadeOut image/fadeIn tekst
// $(document).ready(function(){
// 	$(".textPlantation").hide();

// 	// $("body").scroll(function(){
// 	// 	console.log('scroll triggered')
// 	// 	$("#imagePlantation").fadeOut(3000);
// 	// });
// 	$(document).on( 'scroll', function(){
// 		console.log('Event Fired');
// 	});

// 	$("#imagePlantation").click(function(){
// 		$(".textPlantation").fadeIn(3000);
// 	});
// })

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