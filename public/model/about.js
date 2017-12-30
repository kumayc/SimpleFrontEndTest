window.onload = function(){
    initMap();
}

function initMap() {
    var uluru = {lat: -37.81030, lng: 144.95440};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}