let map = L.map('map').setView([29.9652, -90.09820], 13);
const cartopositron = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
L.tileLayer(cartopositron, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);

/* === This is my Data === */
const SchoolCensus = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/SchoolCensus.geojson'
const rtcc = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/RTCC4326.geojson'
const demo = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/census/DEMO.geojson'
const rent = 'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/census/Rent_BG4326.geojson'
const schoolData =  'https://raw.githubusercontent.com/bri-ne/JSstorymap/main/Data/schoolonly/SchoolData_geo3452.geojson'

/* === These are my slides === */

const myslides = [slide_0, slide_1, slide_2, slide_3, slide_4,
slide_5, slide_6, slide_7, slide_8, slide_9, slide10]

slide0 = {
  title:'title',
  content: 'content'
}