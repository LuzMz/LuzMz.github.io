let myMap = L.map('map2').setView([32.18, -99.14], 4) //modify center, lat and long and zoom #4
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(myMap);
  //'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(myMap)
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
//L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	//attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	//subdomains: 'abcd',
	//minZoom: 0,
	//maxZoom: 18,
	//ext: 'png'}).addTo(myMap)

// L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
//  layers: 'nexrad-n0r-900913',  // layer that do we want to display
//  format: 'image/png', // png type of format with a transparent pixels, specific parts.
//  transparent: true, // reder as transparent if is not data
//  attribution: 'NOAA, Iowa State University' // credits at bottom to the data provider
//}).addTo(myMap) // change to yout map title

//L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer', {
  //layers: '1', // specify the number check from the ms.. link NOOA website, wmspage find the specific tag
  //format: 'image/png',
  //transparent: true,
  //attribution: 'NOAA'
//}).addTo(renameThis)
