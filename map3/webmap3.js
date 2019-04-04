let stateMap = L.map('map3').setView([38.75, -102.83], 4.48)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
 maxZoom: 17,
 attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(stateMap)
//optional:
//let basemapUrl = 'hptt...."
//L.tilelayer (basemapUrl). add to (myMap)
//let state demo.....
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) { //from step6 takes the demographis url, finding the json value and taking that data and save it to the function data, ana allowed us to do something afterwords
//  L.geoJSON(data).addTo(stateMap) //get geoJSON !!!
//})
  // L.geoJSON(data, { style: { color: 'green' } }).addTo(stateMap)
//}) //changing color from step 7 this is an objetc within an objet variable= {property name= style: style options _{_color:place the variable name "green"}}
let stateStyle = { color: 'green' }
let stateGeojsonOptions = { style: stateStyle }
//optional
//let stateStyle = { color:"green"}
// let geoJSONoptions = { style:{ color:"green"}} forn nesting variables
L.geoJSON(data, stateGeojsonOptions).addTo(stateMap)
}) // form last part of point 7
