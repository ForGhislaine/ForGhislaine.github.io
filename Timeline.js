// Create the map
var map = L.map('map').setView([51.505, -0.09], 2); // Initial view, adjust as needed

// Load map tiles (using OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define locations for each timeline event
var locations = {
    1: {lat: 53.37208158229959, lng: -1.4748009901520962, popup: "The Reconnection - Treehouse Boardgame Cafe"},
    2: {lat: 53.38303898018667, lng: -1.4671227798212993, popup: "Our First Date - Escape Sheffield"},
    3: {lat: 53.377887, lng: -1.459682, popup: "Our First Kiss - Train Station Spot"},
    4: {lat: 53.424337, lng: -1.502844, popup: "Started Dating - Sunset Spot"}
    // Add more locations as needed
}; 

 

// Add pins (markers) for each location
Object.keys(locations).forEach(function(key) {
    var loc = locations[key];
    L.marker([loc.lat, loc.lng]).addTo(map)
      .bindPopup(loc.popup);
});

// Function to fly to the clicked location on the timeline
function flyToLocation(locationId) {
    var loc = locations[locationId];
    if (loc) {
        map.flyTo([loc.lat, loc.lng], 15); // Zoom in when flying to the location
        setTimeout(() => {
            map.openPopup(L.popup()
                .setLatLng([loc.lat, loc.lng])
                .setContent(loc.popup));
        }, 1000); // Open the popup after the map flies
    }
}

// Event listener for timeline clicks
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        var locationId = this.getAttribute('data-location');
        flyToLocation(locationId);
    });
});
