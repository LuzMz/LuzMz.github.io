let myMap5 = L.map('map5').setView([32.18, -99.14], 5) // modify lat and long, zoom is good! might change tilte to some descriptive
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(myMap5);
  //'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
//var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	//maxZoom: 18,
//	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(myMap);
// let btPoint = L.marker([30.4507, -91.1546]).addTo(myMap5)
// let orPoint = L.marker([28.5421, -81.379]).addTo(myMap5)
// let myTriangle = L.polygon([
  // [58.3019, -134.4197],
  // [44.3105, -69.7793],
  // [18,-66.590],
  // [34,-118.2439]
// ]).addTo(myMap5)
  //,change because the location to a point of interest
  //coordinates [latitude, longitude]
  // let myLine = L.polygon([
    //[30.4507, -91.1546],
    //[28.5421, -81.379] // L.line is NOT a function; it will pops out an error
// ]).addTo(myMap5);
// btPoint.bindPopup('<em><strong>Baton Rouge, LA</strong></em>') // take argument of the content inside the popup, this accept html
//orPoint.bindPopup('<em><strong>Orlando, Fl</strong></em>')
//myLine.bindPopup('<em>9h-43m distance between Baton Rouge,LA and Orlando,FL</em>') // figure it out how to create a line
// myTriangle.bindPopup('<em><strong>USA TERRITORY</strong></em>')

// L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
//   layers: 'nexrad-n0r-900913',
//   format: 'image/png',
//   transparent: true,
//   attribution: 'NOAA, Iowa State University'
// }).addTo(myMap5)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
}).addTo(myMap5) // dinamic map layer: take the url on our SGI dollowing its standars  /* .notes..  */
