let map = L.map('map').setView([29.9652, -90.09820], 13);
const cartopositron = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
L.tileLayer(cartopositron, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);
let layerGroup = L.layerGroup().addTo(map);

/* === This is my Data === */
const SchoolCensus = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/SchoolCensus.geojson'
const rtcc = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/RTCC4326.geojson'
const demo = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/census/DEMO.geojson'
const rent = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/census/Rent_BG4326.geojson'
const schoolData =  'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/schoolonly/SchoolData_geo3452.geojson'

/* === These are my vars for my functions to fill the slides === */
const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');

/* == Set the slide == */

let slideToShow = { features: [] };
let currentSlideIndex = 0;


function getData() {
  fetch('js/locations.json')
  .then(resp => resp.json())
  .then(data => { 
    slideToShow = data;
  })
  }; 


function initialSlide() {
  const slideNOW = slides[0];
  fillSlide(slideNOW);
  updateMap(mapToShow);
  let layer = updateMap(mapToShow);
  map.flyToBounds(layer.getBounds())

};

function showCurrentSlide() {
  const slideNOW = slides[currentSlideIndex];
  fillSlide(slideNOW);
  let mapToShow = slideToShow.features[currentSlideIndex];
  updateMap(mapToShow, slideNOW);
  let layer = updateMap(mapToShow);
  map.flyToBounds(layer.getBounds())
};


function fillSlide(slide) {
  const converter = new showdown.Converter({ smartIndentationFix: true });

  slideTitleDiv.innerHTML = `<h2>${slide.title}</h2>`;
  slideContentDiv.innerHTML = converter.makeHtml(slide.content);

  if (slide.bounds) {
    map.flyToBounds(slide.bounds);
  } else if (slide.era) {
    map.flyToBounds(layer.getBounds());
  }
};


function updateMap(mapToShow, slide) {
  layerGroup.clearLayers();
  iconuse = icon_order[currentSlideIndex];
  if (slide.dataUse === "cameraData") {
    const geoJsonLayer = fetch(rtcc)
    .then(resp => resp.json())
    .then(data => {
      L.geoJSON(data, {onEachFeature: function(feature) {
        var markersClust = new L.MarkerClusterGroup();
        var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);
        markersClust.addLayer(marker);
        markersClust.addTo(layerGroup);
        }});
    });
    return geoJsonLayer;
  };

  if (slide.dataUse === "demoData") {
    const geoJsonLayer = fetch(demo)
    .then(resp => resp.json())
    .then(data => { 
      L.geoJSON(data, {style: styleDemo,  
        onEachFeature: onEachFeatureDemo
      }).addTo(layerGroup)
      });
    return geoJsonLayer;
  };

  if (slide.dataUse === "rentData") {
    const geoJsonLayer = fetch(rent)
    .then(resp => resp.json())
    .then(data => { 
      L.geoJSON(data, {style: styleRent,  
        onEachFeature: onEachFeatureRent
      }).addTo(layerGroup)
      });
    return geoJsonLayer;

  } else {
    const geoJsonLayer = L.geoJSON(mapToShow, { pointToLayer: (p, latlng) => L.marker(latlng, 
      {icon: iconuse}) })
      .bindTooltip(l => l.feature.properties.label)
      .addTo(layerGroup).openTooltip();
  
    return geoJsonLayer;
  };

}


function nextSlide() {
  currentSlideIndex++;

  if (currentSlideIndex === slides.length) {
    currentSlideIndex = 0;
  }

  showCurrentSlide();
};

function prevSlide(){
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showCurrentSlide();
}


slidePrevButton.addEventListener('click', prevSlide);
slideNextButton.addEventListener('click', nextSlide);


getData();
console.log("data in");
initialSlide();