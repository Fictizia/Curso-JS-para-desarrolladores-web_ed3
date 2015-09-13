(function() {
// Google Maps        
google.maps.visualRefresh = true; // Refresco Constante

var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('mapa'),
      mapOptions);
    // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Te pille! :-)'
      });
      map.setCenter(pos);
      

      //datos Primer Arranque
      muestraDatos(x ,position);

    
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: El Servicio de Geolocalización esta fallando.';
  } else {
    var content = 'Error: Tu navegador no soprota la Geolocalización.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Datos (Core)

var x = document.getElementById("datos");
var a = document.getElementById("recarga");

function muestraDatos(div, position){        
        x.innerHTML = "Latitud: " + position.coords.latitude + 
        "<br>Longitud: " + position.coords.longitude +
        "<br>Precisión: " + position.coords.accuracy +
        "<br>Altitud: " + position.coords.altitude +
        "<br>Altitud Precisa: " + position.coords.altitudeAccuracy +
        "<br>Grados Norte: " + position.coords.heading +
        "<br>Velocidad m/s: " + position.coords.speed + 
        "<br>Última Conexión: " + position.timestamp;
};


//datos Actualizacion
a.onclick = function() {
        initialize();
        return false;
}

    
})();
        