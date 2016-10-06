//IVM CAROUSEL INACTIEF test to see whether it conflicts
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






// $(window).scroll(function() {
//     $("#imagePlantation").css({
//     'opacity' : 1-(($(this).scrollTop())/100)
//     });          

// });


// });

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
