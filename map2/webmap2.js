let myMap = L.map('map2').setView([32.18, -99.14], 4)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(myMap)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',  // layer that do we want to display
  format: 'image/png', // png type of format with a transparent pixels, specific parts.
  transparent: true, // reder as transparent if is not data
  attribution: 'NOAA, Iowa State University' // credits at bottom to the data provider
}).addTo(myMap)
