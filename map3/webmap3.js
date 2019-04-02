let myMap3 = L.map('map3').setView([38.75, -102.83], 4.48) // modify lat and long, zoom is good! might change tilte to some descriptive
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
 maxZoom: 17,
 attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(myMap3)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
//jQuery.getJSON(stateDemographicsUrl, function (data) { //from step6
  //L.geoJSON(data).addTo(stateMap)
//})
