let mortuarycomplexMap = L.map('map1').setView([	30.0149, -90.0978], 16.5) //modify scale and coordinates!! :)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mortuarycomplexMap)
let currentMainRoadUrl = 'https://luzmz.github.io/ffsconsulting/Project1/ExistinSiteConditions/current_main_road.geojson'
jQuery.getJSON(currentMainRoadUrl, function (data) {
  L.geoJSON(data, {
    style: { color :"#ffff00", weight: 12, opacity: 0.5},
    onEachFeature: onEachMainRoad
  }).addTo(mortuarycomplexMap)
})
let onEachMainRoad = function (feature, layer) {
  layer.bindPopup('Existing Road, Marconi Dr')
  //statesLayer.addLayer(mortuarycomplexMap)
}
let currentWetlandAreaUrl = 'https://luzmz.github.io/ffsconsulting/Project1/ExistinSiteConditions/WetlandArea.geojson'
jQuery.getJSON(currentWetlandAreaUrl, function (data) {
  L.geoJSON(data, {
    style: { color:"#ff0000", weight: 1, opacity: 0.5,fillColor:"#008000",fillOpacity: 0.5},
    onEachFeature: onEachWetlandArea
  }).addTo(mortuarycomplexMap)
})
let onEachWetlandArea = function (feature, layer) {
  layer.bindPopup('Wetland')
}
