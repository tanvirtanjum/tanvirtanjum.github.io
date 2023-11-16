// Initialize and add the map
function initMap1() 
{
    // The location of loc
    const loc = { lat: 23.73286740974006, lng: 90.42418355416557 };
    // The map, centered at loc
    const map = new google.maps.Map(document.getElementById("map1"), {
      zoom: 15,
      center: loc,
    });
    // The marker, positioned at loc
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
}

function initMap2() 
{
    // The location of loc
    const loc = { lat: 23.73286740974006, lng: 90.42418355416557 };
    // The map, centered at loc
    const map = new google.maps.Map(document.getElementById("map2"), {
      zoom: 15,
      center: loc,
    });
    // The marker, positioned at loc
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
}

function initMap3()
{
    // The location of loc
    const loc = { lat: 23.75970701601936, lng: 90.37032253169666 };
    // The map, centered at loc
    const map = new google.maps.Map(document.getElementById("map3"), {
      zoom: 15,
      center: loc,
    });
    // The marker, positioned at loc
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
}

function initMap4()
{
    // The location of loc
    const loc = { lat: 23.822149863718685, lng: 90.42741701582443 };
    // The map, centered at loc
    const map = new google.maps.Map(document.getElementById("map4"), {
      zoom: 15,
      center: loc,
    });
    // The marker, positioned at loc
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
}

function initMap5()
{
    // The location of loc
    const loc = { lat:  49.59798121009576, lng: 11.004543696110806 };
    // The map, centered at loc
    const map = new google.maps.Map(document.getElementById("map5"), {
      zoom: 15,
      center: loc,
    });
    // The marker, positioned at loc
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
}

function initMap() 
{
  initMap1();
  initMap2();
  initMap3();
  initMap4();
  initMap5();
}