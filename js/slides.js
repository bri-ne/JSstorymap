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
  iconUrl: 'img/marker8.png',
  iconSize: [10, 10],
  iconAnchor: [0, 0],
  popupAnchor: [3, 10]
});

var plainIcon = L.icon({
  iconUrl: 'img/marker10.png',
  iconSize: [40, 40],
  iconAnchor: [0, 0],
  popupAnchor: [15, 40]
});
  
  
var cameraIcon = L.icon({
  iconUrl: 'img/marker5.png',
  iconSize: [70, 70],
  iconAnchor: [0, 0],
  popupAnchor: [35, 5]
});  
var nopdIcon = L.icon({
  iconUrl: 'img/nopd.png',
  iconSize: [40, 40],
  iconAnchor: [0, 0],
  popupAnchor: [-3, -10]
});


  
const slide_0 = {
    title:'The Real Time Crime Center',
    slide: 'slide_0',
    dataUse: 'None', 
    icon:  cameraIcon,
    img: 'yes',
    content: 'This is the Real Time Crime Center, a “state-of-the-art" surveillance hub operating 24/7. It is housed within the New Orleans office of Homeland Security, the agency works seamlessly with the police department, fire department, New Orleans Emergency Medical Services, and other state and university police. The RTCC’s central role among law enforcement and public safety agencies is due to its consolidation of surveillance camera feeds from around the city.  ',
  };
  
const slide_1 = {
    title: 'The Cameras',
    slide: 'slide_1',
    dataUse: 'cameraData',
    icon: markerCustom,
    boundstop: 30.19146005911941, 
    boundsbottom: 29.833548988710852,
    boundsleft: -90.15555895041157,
    boundsright:-89.79314349392948,
    content: 'Here are all the publicly owned surveillance cameras that stream their live feed straight to the RTCC. In total there are 555 city owned cameras, but this does not include the 420 cameras owned by residents that have agreed to share their data with the center. Due to privacy concerns, the city declined to make available the location of the resident owned cameras. But in general, the city has not been forthcoming about the location of cameras that they own and operate. This map was only made possible by the outcome of a lawsuit, in which the city was sued in a successful demand for access to the location of the city’s surveillance cameras.',
  };
const slide_2 = {
    title: 'The Mayor\'s Office ',
    slide: 'slide_2',
    dataUse: 'None', 
    caption: '<h3> Former Mayor Landrieu (front) and current Mayor Cantrell (to the right of Landrieu) </h3>',
    img: '<img src = "img/mayors.jpg" height="198px" width="300px" />',
    content: 'The Real Time Crime Center was created by former Mayor Mitch Landrieu in 2017 with an initial budget of $40 million. It was initiated in the name of fighting not only crime but also acts of terrorism. In fact, the RTCC not only coordinates with local, university, and state law enforcement, but it also assists the New Orleans office of the FBI. Under new leadership, Mayor Cantrell has also been supportive of the RTCC and investments in surveillance technology. But all of this has been met with consistent community pushback.',
  };
const slide_3 = {
    title: 'Louisiana SAFE Fusion Center',
    slide: 'slide_3',
    dataUse: 'None',
    content: 'content',
  };
const slide_4 = {
    title: 'DemoData',
    slide: 'slide_4',
    dataUse: 'demoData', 
    content: 'content',
  };
const slide_5 = {
    title: 'RentData',
    slide: 'slide_5',
    dataUse: 'rentData', 
    content: 'content',
  };



const slides = [slide_0, slide_1, slide_2, slide_3, slide_4]