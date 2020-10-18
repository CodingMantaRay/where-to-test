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
   
   // Near Washakie, Utah
  { lat: 41.8193147, lng: -111.831736 }, // Lee's Marketplace Smithfield
  { lat: 41.8062536, lng: -111.8326689 }, //North Cache Valley Instacare
  { lat: 41.7749823, lng: -111.8215051 }, //TestUtah Site Logan
  { lat: 41.72227428544506, lng: -112.18156253055226 }, //Bear River Valley Clinic
  { lat: 41.7109106, lng: -112.1649271 }, //Ridley's Pharmacy #1151
  { lat: 41.49161, lng: -112.024199 }, // TestUtah Site Brigham City
   
  // Near Goshute Reservation
  { lat: 39.350939213824, lng: -112.55993794501912}, //  White Sage Delta Clinic
  { lat: 38.4000079, lng: -113.0101773}, //Milford Valley Memorial Hospital
  { lat: 38.952495, lng: -112.341614}, // Fillmore Clinic
  { lat: 40.5458047, lng: -112.2983492}, // Tooele Instacare
  
  // Near Navajo Nation and Ute Mountain Reservation
  { lat: 37.6124576, lng: -109.4822162}, // Blue Mountain Hospital
  { lat: 37.8745175, lng: -109.3498165}, // San Juan County Hospital
  { lat: 37.049904, lng: -113.620777}, // Wayne County Community Health Center - Kazan Memorial Clinic
  { lat: 38.342522, lng: -111.549678}, // Wayne County Community Health Center - Bicknell
  { lat: 38.5749725, lng: -109.5593684}, // Moab Regional Hospital
  
  // Near Paiute (UT) Reservation
  { lat: 37.6606417, lng: -113.0814535}, // Cedar City Instacare
  { lat: 37.1136722, lng: -113.5960831}, // Family Healthcare - 3 Amigos Parking Lot
  { lat: 37.09951350231084, lng: -113.5751926365467}, // 400 E Campus
  { lat: 37.1165917, lng: -113.545416}, // TestUtah Site St. George
  // can get more
  
  // Near Skull Valley Reservation
  { lat: 40.5458047, lng: -112.2983492}, // Tooele Instacare
  { lat: 40.585836, lng: -111.827071}, // South Jordan Health Center
  { lat: 40.349181, lng: -111.967704}, // Ridley's Pharmacy #1165
  { lat: 40.5242044, lng: -111.9863079}, // Granger Medical - Riverton
  { lat: 40.522169, lng: -111.9796403}, // Southridge Instacare
  { lat: 40.5737314, lng: -111.9757101}, // CopperView Medical Center

  // Near Uintah and Ouray Indian Reservation
  { lat: 40.304303, lng: -109.9968276}, // TestUtah Site Roosevelt
  { lat: 40.3040068,lng: -109.9964586 }, // Uintah Basin Medical Center - ER Entrance
  { lat: 40.1642104, lng: -110.3991683}, // A&W Pharmacy
  { lat: 40.2966785, lng: -109.991427}, // UBMC Clinic - Duchesne
  { lat: 40.4621183, lng: -109.538128}, // Uintah Basin Healthcare - Vernal Urgent Care
  { lat: 40.4580156, lng: -109.5309702}, // Ashley Regional Medical Center
];

const tribeLocations = [
  { lat: 41.9440909, lng: -112.2171823 }, // Washakie, Utah  (where the Shoshone Indians own land)
  { lat: 39.852785, lng: -114.042560 }, // Goshute Reservation (Goshute Reservation, Callao, Nevada)
  { lat: 37.085774, lng: -110.053038 }, // Navajo Nation (the part of it in Utah)
	
  { lat: 37.170914, lng: -113.779443 }, // Paiute (UT) Reservation
  //Paiute Bands' Community Centers
  { lat: 37.6851052, lng: -113.0577987 }, // Cedar Community Building (440 North Paiute Drive, Cedar City, UT 84721)
  { lat: 38.8022, lng: -112.437731 }, // Kanosh Community Building (Kanosh, UT 84637 United States)
  { lat: 38.7680657, lng: -112.0837225 }, // Koosharem Community Building ( Richfield, UT 84701 United States )
  { lat: 37.1712263,lng: -113.6914057 }, // Shivwits Band Community Building ( Ivins, UT 84738 United States )
  // Couldn't find a community building for the Indian Peaks Band.
	
  { lat: 40.385226, lng: -112.730020 }, // Skull Valley Reservation
  { lat: 40.155762, lng: -109.953254 }, // Uintah and Ouray Indian Reservation
  { lat: 37.113496, lng: -109.043598 }, // Ute Mountain Reservation (which is totally in Colorado)
];
