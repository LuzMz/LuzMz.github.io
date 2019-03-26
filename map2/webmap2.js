let myMap = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
//var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	//maxZoom: 18,
//	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(myMap);
let nolaPoint = L.marker([30, -90]).addTo(myMap)
let myTriangle = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
  //,change because this location is in London
  //[]
]).addTo(myMap);
nolaPoint.bindPopup('A <em><strong>marker</strong></em>') // take argument of the content inside the popup, this accept html
myTriangle.bindPopup('A <em>POLIGON</em>')
// figure it out how to create a line
