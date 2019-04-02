let myMap3 = L.map('map3').setView([38.75, -102.83], 4.48) // modify lat and long, zoom is good! might change tilte to some descriptive
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(myMap3);
L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/ridge.cgi?sector=MSY&prod=N0Q', { //at New Orleans
 layers: 'single',
 format: 'image/png',
 transparent: true,
 attribution: 'NOAA, Iowa State University'
}).addTo(myMap3);
 L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi', { // in USA
  layers: 'mrms_p72h',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(myMap3)
//L.esri.dynamicMapLayer({
  //url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
	//}).addTo(myMap3) // dinamic map layer: take the url on our SGI dollowing its standars  /* .notes..  */
