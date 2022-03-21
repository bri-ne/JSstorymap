/* Map color Functions*/
function getColor(d) {
  return d > 99 ? '#f0f921' :
    d > 89  ? '#fcce25' :
    d > 79  ? '#fca636' :
    d > 69  ? '#f2844b' :
    d > 59   ? '#e16462' :
    d > 49   ? '#cc4778' :
    d > 39   ? '#b12a90' :
    d > 29   ? '#8f0da4' :
    d > 19   ? '#6a00a8' :
    d > 9   ? '#41049d' :
                '#0d0887';
  }

/* DEMO */  
function styleDemo(feature) {
  return {
      fillColor: getColor(feature.properties.NonWhite_P),
      weight: 0.5,
      opacity: 0.7,
      color: 'white',
      fillOpacity: 0.5
  };
}

function onEachFeatureDemo(feature, layer){
  //use feature.properties to construct popup html
  var popupContentDemo = `<p> Percent Non-White Population: ${Math.round(feature.properties.NonWhite_P)}% <br> Number of Nearby Cameras: ${feature.properties.Camera_Count} </p>`;

  layer.bindPopup(popupContentDemo);
  };

/* RENT */  
function styleRent(feature) {
  return {
      fillColor: getColor(feature.properties.P50_moreP),
      weight: 1,
      opacity: 0.7,
      color: 'gray',
      fillOpacity: 0.7
  };
}

function onEachFeatureRent(feature, layer){
  //use feature.properties to construct popup html
  var popupContentRent = `<p> Percent Residents Spending Half or More of Their Income on Rent: ${Math.round(feature.properties.P50_moreP)}% <br> Number of Nearby Cameras: ${feature.properties.Camera_Count} </p>`;

  layer.bindPopup(popupContentRent);
  };