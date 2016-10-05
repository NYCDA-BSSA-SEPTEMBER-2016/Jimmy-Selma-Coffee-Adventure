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