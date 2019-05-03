let mortuarycomplexMap = L.map('map1').setView([	30.0149, -90.0978], 16.5) //modify scale and coordinates!! :)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mortuarycomplexMap)
// existing conditions
let develomentalSiteAreaUrl = 'https://luzmz.github.io/ffsconsulting/Project1/ExistinSiteConditions/Site.geojson'
jQuery.getJSON(develomentalSiteAreaUrl, function (data) {
  L.geoJSON(data, {
    style: { color:"#0000ff", weight: 1, opacity: 0.5,fillColor:"#ff8000",fillOpacity: 0.4},
    onEachFeature: onEachdevelomentalSiteArea
  }).addTo(mortuarycomplexMap)
})
let onEachdevelomentalSiteArea = function (feature, layer) {
  layer.bindPopup('Site of Interest')
}
let currentMainRoadUrl = 'https://luzmz.github.io/ffsconsulting/Project1/ExistinSiteConditions/current_main_road.geojson'
jQuery.getJSON(currentMainRoadUrl, function (data) {
  L.geoJSON(data, {
    style: { color :"#ffff00", weight: 12, opacity: 0.5},
    onEachFeature: onEachMainRoad
  }).addTo(mortuarycomplexMap)
})
let onEachMainRoad = function (feature, layer) {
  layer.bindPopup('Existing Road, Marconi Dr')
  }
	let currentWalkingBikingPathUrl = 'https://luzmz.github.io/ffsconsulting/Project1/ExistinSiteConditions/current_walkin_biking_path.geojson'
	jQuery.getJSON(currentWalkingBikingPathUrl, function (data) {
	  L.geoJSON(data, {
	    style: { color :"#b1b1b1", weight: 6, opacity: .6},
	    onEachFeature: onEachcurrentWalkingBikingPath
	  }).addTo(mortuarycomplexMap)
	})
	let onEachcurrentWalkingBikingPath = function (feature, layer) {
	  layer.bindPopup('Existing Walking and Biking Path')
	}
let currentWetlandAreaUrl = 'https://luzmz.github.io/ffsconsulting/Project1/ExistinSiteConditions/WetlandArea.geojson'
jQuery.getJSON(currentWetlandAreaUrl, function (data) {
  L.geoJSON(data, {
    style: { color:"#ff0000", weight: 1, opacity: 0.5,fillColor:"#008000",fillOpacity: 0.3},
    onEachFeature: onEachWetlandArea
  }).addTo(mortuarycomplexMap)
})
let onEachWetlandArea = function (feature, layer) {
  layer.bindPopup('Wetland')
}
// Proposal
let proposeSwaleUrl = 'https://luzmz.github.io/ffsconsulting/Project1/DevelopmentalProposal/Swale.geojson'
jQuery.getJSON(proposeSwaleUrl, function (data) {
	L.geoJSON(data, {
		style: { color :"#008080", weight: 12, opacity: .8},
		onEachFeature: onEachSwale
	}).addTo(mortuarycomplexMap)
})
let onEachSwale = function (feature, layer) {
	layer.bindPopup('Swale (drainage)')
}
let proposeMainRoadUrl = 'https://luzmz.github.io/ffsconsulting/Project1/DevelopmentalProposal/proposed_main_road.geojson'
jQuery.getJSON(proposeMainRoadUrl, function (data) {
	L.geoJSON(data, {
		style: { color :"#ffffb3", weight: 12, opacity: .8},
		onEachFeature: onEachproposeMainRoad
	}).addTo(mortuarycomplexMap)
})
let onEachproposeMainRoad = function (feature, layer) {
	layer.bindPopup('By reclocating Marconi DR, fragmentation reduces and imcreases wetland area')
}
let proposeWalkingBikingPathUrl = 'https://luzmz.github.io/ffsconsulting/Project1/DevelopmentalProposal/proposed_walking_biking_path.geojson'
jQuery.getJSON(proposeWalkingBikingPathUrl, function (data) {
	L.geoJSON(data, {
		style: { color :"#555555", weight: 6, opacity: .8},
		onEachFeature: onEachproposeWalkingBikingPath
	}).addTo(mortuarycomplexMap)
})
let onEachproposeWalkingBikingPath = function (feature, layer) {
	layer.bindPopup('Future Walking and Biking Path')
}

let complexDevelopmentUrl = 'https://luzmz.github.io/ffsconsulting/Project1/DevelopmentalProposal/proposed_development_complex.geojson'
jQuery.getJSON(complexDevelopmentUrl, function (data) {
  L.geoJSON(data, {
    style: { color:"#f24f00", weight: 2, opacity: 1,fillColor:"#2e95a7",fillOpacity: 0.5},
    onEachFeature: onEachcomplexDevelopment
  }).addTo(mortuarycomplexMap)
})
let onEachcomplexDevelopment = function (feature, layer) {
  layer.bindPopup('SerenYTY-DAD Complex')
}

let reclaimedWetlandUrl = 'https://luzmz.github.io/ffsconsulting/Project1/DevelopmentalProposal/claimed_wetland_area.geojson'
jQuery.getJSON(reclaimedWetlandUrl, function (data) {
  L.geoJSON(data, {
    style: { color:"#ffd680", weight: 2, opacity: 1,fillColor:"#4300f2",fillOpacity: 0.4},
    onEachFeature: onEachreclaimedWetland
  }).addTo(mortuarycomplexMap)
})
let onEachreclaimedWetland = function (feature, layer) {
  layer.bindPopup('Reclaimed Wetland Surface')
}
