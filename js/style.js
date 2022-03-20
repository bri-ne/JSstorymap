/* Map color Functions*/
function getColor(d) {
  return d > 99 ? '#fde725' :
    d > 8  ? '#bddf26' :
    d > 79  ? '#7ad151' :
    d > 69  ? '#44bf70' :
    d > 59   ? '#22a884' :
    d > 49   ? '#21918c' :
    d > 39   ? '#2a788e' :
    d > 29   ? '#355f8d' :
    d > 19   ? '#414487' :
    d > 9   ? '#482475' :
                '#440154';
  }

/* DEMO */  
function styleDemo(feature) {
  return {
      fillColor: getColor(feature.properties.NonWhite_P),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function onEachFeatureDemo(feature, layer){
  //use feature.properties to construct popup html
  var popupContentDemo = `<p> Percent Non-White Population: ${feature.properties.NonWhite_P} <br> Camera Count: ${feature.properties.CameraCount} </p>`;

  layer.bindPopup(popupContentDemo);
  };

/* RENT */  
function styleRent(feature) {
  return {
      fillColor: getColor(feature.properties.P50_moreP),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function onEachFeatureRent(feature, layer){
  //use feature.properties to construct popup html
  var popupContentRent = `<p> Percent Residents Spending 50% of Income on Rent: ${feature.properties.P50_moreP} <br> Camera Count: ${feature.properties.CameraCount} </p>`;

  layer.bindPopup(popupContentRent);
  };