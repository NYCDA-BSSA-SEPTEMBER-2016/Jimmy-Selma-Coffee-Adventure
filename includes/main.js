//test to see whether it conflicts
$("div #imagePlantation").hide();
$("div #imagePlantation").fadeIn(3000);

// Google Maps on the contact page

function initMap() {
        var uluru = {lat: 52.341099 lng: 4.823463};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }