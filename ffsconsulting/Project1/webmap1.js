let mortuarycomplexMap = L.map('map1').setView([	30.0149, -90.0978], 16.5) //modify scale and coordinates!! :)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mortuarycomplexMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) { //from step6 takes the demographis url, finding the json value and taking that data and save it to the function data, ana allowed us to do something afterwords
//  L.geoJSON(data).addTo(mortuarycomplexMap) //get geoJSON !!!
//})
  // L.geoJSON(data, { style: { color: 'green' } }).addTo(mortuarycomplexMap)
//}) //changing color from step 7 this is an objetc within an objet variable= {property name= style: style options _{_color:place the variable name "green"}}
//let stateStyle = { //added from step 8
  //color: 'green',
  //weight: 1, //borders from the polygon follow the step 8
  //fillOpacity: 0.2
//}//added from step 8
//-let stateStyle = { color: 'green' }
//let stateStyle = function () { //from step 9
  //return {
    //color: 'green',
    //weight: .5, // I modify the value
    //fillOpacity: 0.2
  //}
//}//from step 9
  let stateStyle = function (feature) { //from step 9 bottom -this variable Featurewhe need to get the atributes of the current geojeson, if that data changes, it will be added to the map, and also added styles from a different state
    let population = feature.properties.POPULATION //objects conainig fruits example... the variable name is feature, and valid geojson variable is called propertis and its property is a column called med_age, and we can access from the geojson data, try to place it on the google console; if we change the artibute name just tyoe it "State_Name" from the file itself or the source of the data// get the current state's Median Age attribute
    let stateColor = 'blue' // conditional estatements if statements if...then whe want to change the color previuosly stablished; if is less then the program does not do anything// let the initial color be a darker green
    if ( population > 6400000 ) { stateColor = 'red' } // if the state's median age is less than the average, color it a lighter green
    return {
      color: stateColor, //use the color variable above for the value
      weight: .3,
      fillOpacity: 0.1,
      stroke: 0.2
      }
    }//from step 9 bottom
  let onEachFeature = function (feature, layer) { //from 10 bottom
   let name = feature.properties.STATE_NAME
   let population = feature.properties.POPULATION //Choose a diferent variable for the assigment!!!!
   layer.bindPopup('Population of ' + name + ':' + population + '<br><em>National average: 6458430 on 2016<em>') // combine variables name = 'Luke' -- y = 'Hello,' + name--- value showing in the pop up!!!
   } //from 10 bottom
  let stateGeojsonOptions = { //from 10 top   <em><strong>Baton Rouge, LA</strong></em>
    style: stateStyle,
    onEachFeature: onEachFeature
    } //from 10 top
  //let stateGeojsonOptions = { style: stateStyle } //mofify from step 10
  //optional
  //let stateStyle = { color:"green"}
  // let geoJSONoptions = { style:{ color:"green"}} forn nesting variables
  L.geoJSON(data, stateGeojsonOptions).addTo(mortuarycomplexMap)
  }) // form last part of point 7
