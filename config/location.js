


// (function () {
//   navigator.geolocation.getCurrentPosition(function (position) {
//      console.log(position.coords.latitude)
//      console.log(position.coords.longitude)
//   },
//   function (error) {
//       console.log("The Locator was denied. :(")
//   })
// })();

// let browserlocation = document.getElementById("location");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, showError);
//   } else { 
//     browserlocation.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {browserlocation.innerHTML = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude; }
// function showError(error) {if (error.PERMISSION_DENIED) {
//   browserlocation.innerHTML = "This user denied the geolocation request.";
//   }
// }
// navigator.geolocation.getCurrentPosition(position => {
//   const { latitude, longitude } = position.coords;
//   // Show a map centered at latitude / longitude.
// });