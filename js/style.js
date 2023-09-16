
    


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

/* Legend Function */


function getLegendTitle () {
  let titlehere = LegendTitle;
  return titlehere
}  
var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {

    
    var div = L.DomUtil.create('div', 'info-legend');
    labels = ['<h4 style=" color:#FFFFFF; margin-bottom:10px; margin-top:0; padding: 1rem; border: 0.2rem solid #1F1F1F; background: #1F1F1F;">Percent of Renters Spending 50% or More of Their Income on Rent </h4><div class="legend-colors">'],
    catlables = ['100%','75%', '50%','25%', '10%', '0'];
    categories = [100, 75, 50, 25, 10, 0]
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
              '<div class="legend-deets">'+
              '<i class="circle" style=" color: white;background-color:' + getColor(categories[i]) + '"></i> ' +
              '<i style="padding-left:0.5rem; color: #1F1F1F; font-weight: 700;">'+
            (catlables[i] ? catlables[i] : '') +
            '</i>'+
            '</div>'
            );

        }
        div.innerHTML = labels.join('<br>');
        div.innerHTML += '</div>'
    return div;
    };


var legend2 = L.control({position: 'bottomleft'});
legend2.onAdd = function (map) {

    
    var div = L.DomUtil.create('div', 'info-legend');
    labels = ['<h4 style=" color:#FFFFFF; margin-bottom:10px; margin-top:0; padding: 1rem; border: 0.2rem solid #1F1F1F; background: #1F1F1F;">Percent of Homeowners Spending 50% or More of Their Income on Rent </h4> <div class="legend-colors">'],
    catlables = ['100%','75%', '50%','25%', '10%', '0'];
    categories = [100, 75, 50, 25, 10, 0]
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
              '<div class="legend-deets">'+
              '<i class="circle" style=" color: white;background-color:' + getColor(categories[i]) + '"></i> ' +
              '<i style="padding-left:0.5rem; color: #1F1F1F; font-weight: 700;">'+
            (catlables[i] ? catlables[i] : '') +
            '</i>'+
            '</div>'
            );

        }
        div.innerHTML = labels.join('<br>');
        div.innerHTML += '</div>'
    return div;
    };



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
      weight: 0.5,
      opacity: 0.7,
      color: 'white',
      fillOpacity: 0.5
  };
}

function onEachFeatureRent(feature, layer){
  //use feature.properties to construct popup html
  var popupContentRent = `<p> Percent Renters Spending Half or More of Their Income on Rent: ${Math.round(feature.properties.P50_moreP)}% <br> Number of Nearby Cameras: ${feature.properties.Camera_Count} </p>`;

  layer.bindPopup(popupContentRent);

  map.removeControl(legend2);
  legend.addTo(map);
  };

/* MORT  */  
function styleMort(feature) {
  return {
      fillColor: getColor(feature.properties.P_mort_50_P),
      weight: 0.5,
      opacity: 0.7,
      color: 'white',
      fillOpacity: 0.5
  };
}

function onEachFeatureMort(feature, layer){
  //use feature.properties to construct popup html
  var popupContentMort = `<p> Percent Homeowners Spending Half or More of Their Income on Housing Costs: ${Math.round(feature.properties.P_mort_50_P)}% <br> Number of Nearby Cameras: ${feature.properties.Camera_Count} </p>`;

  layer.bindPopup(popupContentMort);

  map.removeControl(legend);
  legend2.addTo(map);
  };  

