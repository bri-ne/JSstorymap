/* === These are my slides === */
/* my thought is to use index to loop through coordinates. in the features? like index 0 = slide 0 */


/*const myslides = [slide_0, slide_1, slide_2, slide_3, slide_4,
  slide_5, slide_6, slide_7, slide_8, slide_9, slide10]
  
    slide_temp = {
    title:'',
    content: '',
    coords: ' '
  }
  */  
  

var markerCustom = L.icon({
  iconUrl: 'img/marker2.png',
  iconSize: [32, 40],
  iconAnchor: [0, 0],
  popupAnchor: [12, 40]
});
  
  
var nopdIcon = L.icon({
  iconUrl: 'img/nopd.png',
  iconSize: [40, 40],
  iconAnchor: [0, 0],
  popupAnchor: [-3, -10]
});


icon_order = [nopdIcon, markerCustom, "skip", nopdIcon]  
  
const slide_0 = {
    title:'The Real Time Crime Center',
    number: 0,
    dataUse: 'None', 
    content: 'This is the Real Time Crime Center, a “state-of-the-art" surveillance hub operating 24/7. It is housed within the New Orleans office of Homeland Security, the agency works seamlessly with the police department, fire department, New Orleans Emergency Medical Services, and other state and university police. The RTCC’s central role among law enforcement and public safety agencies is due to its consolidation of surveillance camera feeds from around the city.  ',
  };
  
const slide_1 = {
    title: 'The Cameras',
    number: 1,
    dataUse: 'cameraData', 
    content: 'content',
  };
const slide_2 = {
    title: 'Louisiana SAFE Fusion Center',
    number: 2,
    dataUse: 'None', 
    content: 'content',
  };
const slide_3 = {
    title: 'DemoData',
    number: 3,
    dataUse: 'demoData', 
    content: 'content',
  };
const slide_4 = {
    title: 'RentData',
    number: 4,
    dataUse: 'rentData', 
    content: 'content',
  };



const slides = [slide_0, slide_1, slide_2, slide_3, slide_4]