let myMap5 = L.map('map5').setView([38.75, -102.83], 4.48) // modify lat and long, zoom is good! might change tilte to some descriptive
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(myMap5);
L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/ridge.cgi?sector=DGX&prod=N0Q', {
 layers: 'single',
 format: 'image/png',
 transparent: true,
 attribution: 'NOAA, Iowa State University'
 }).addTo(myMap5);
 //L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi', {
  //layers: 'mrms_p72h',
  //format: 'image/png',
  //transparent: true,
  //attribution: 'NOAA, Iowa State University'
  //}).addTo(myMap5)
//L.esri.dynamicMapLayer({
  //url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
	//}).addTo(myMap5) // dinamic map layer: take the url on our SGI dollowing its standars  /* .notes..  */
