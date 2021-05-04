let browserlocation = document.getElementById("userLocationWithBrowser");
let geo = navigator.geolocation

function getLocation() {
  if (geo) {
    geo.getCurrentPosition(showPosition);
  } else { 
    browserlocation.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) { browserlocation.innerHTML = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude }
