let myMap = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
//var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	//maxZoom: 18,
//	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(myMap);
let btPoint = L.marker([30.4507, -91.1546]).addTo(myMap)
let orPoint = L.marker([28.5421, -81.379]).addTo(myMap)
let myTriangle = L.polygon([
  [58.3019, -134.4197],
  [44.3105, -69.7793],
  [18,-66.590],
  [34,-118.2439]
  ]).addTo(myMap)
  //,change because the location to a point of interest
  //coordinates [latitude, longitude]
  let myLine = L.polygon([
    [30.4507, -91.1546],
    [28.5421, -81.379] // L.line is NOT a function; it will pops out an error
]).addTo(myMap);
btPoint.bindPopup('<em><strong>Baton Rouge, LA</strong></em>') // take argument of the content inside the popup, this accept html
orPoint.bindPopup('<em><strong>Orlando, Fl</strong></em>')
myLine.bindPopup('<em>9h-43m distance between Baton Rouge,LA and Orlando,FL</em>') // figure it out how to create a line
myTriangle.bindPopup('<em><strong>USA TERRITORY</strong></em>')
