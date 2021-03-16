function CedonaMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: new google.maps.LatLng()
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
