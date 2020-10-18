// This function is called when the webpage first loads
function initMap() {
  // Create an initial center location
  mapCenter = tribeLocations[0];
  // Create a new map object
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: mapCenter,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = testingLocations.map((testingLocation, i) => {
    return new google.maps.Marker({
      position: testingLocation,
      label: labels[i % labels.length],
	  map: map,
    });
  });
  
}

const testingLocations = [
   // Each location has a latitude and a longitude
  { lat: 41.8193147, lng: -111.831736 }, // Lee's Marketplace Smithfield
  { lat: 41.8062536, lng: -111.8326689 }, //North Cache Valley Instacare
  { lat: 41.7749823, lng: -111.8215051 }, //TestUtah Site Logan
  { lat: 41.72227428544506, lng: -112.18156253055226 }, //Bear River Valley Clinic
  { lat: 41.7109106, lng: -112.1649271 }, //Ridley's Pharmacy #1151
];

const tribeLocations = [
	{ lat: 41.9440909, lng: -112.2171823 } // Washakie, Utah
];
