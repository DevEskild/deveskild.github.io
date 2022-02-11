function initMap() {
    let location = {lat: 62.4609, lng: 6.3747}
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });
    let marker = new google.maps.Marker({
        position: location, 
        map: map
    })
}
