import { createDiv, createImg, creatBtn } from "./module";
import "../styles/home.scss";

function createHome() {
  content.appendChild(createDiv("", "home", ""));

  (function homeOne() {
    home.appendChild(createDiv("", "home1", ""));
    home1.style.backgroundImage = `url(${require("./assets/restaurant-img1.jpg")})`;
  })();

  (function homeTwo() {
    home.appendChild(createDiv("", "home2", ""));
    home2.appendChild(createDiv("", "homeLeft", ""));
    home2.appendChild(createDiv("", "homeRight", ""));
    homeRight.appendChild(
      createImg("homeImg1", "homeImg", require("./assets/sushi2.png"))
    );
    homeLeft.appendChild(createDiv("", "homeTitle", ""));
    homeLeft.appendChild(createDiv("", "separator", ""));
    homeLeft.appendChild(createDiv("", "homeTitle2", ""));
    homeLeft.appendChild(createDiv("", "homeTxt1", ""));

    homeTitle.textContent = "すし";
    separator.textContent = "﹏﹏";
    homeTitle2.textContent = "Yumi sushi";
    homeTxt1.textContent =
      "Discover the world of fresh homemade sushi. Unlike most other sushi shops, we use fresh fish delivered every day before opening. Our skilled sushi chef will make your mouth water!";
  })();

  (function homeFive() {
    home.appendChild(createDiv("", "home5", ""));
    home5.appendChild(createDiv("", "home5Images", ""))
    home5Images.appendChild(createImg("sushi-plate", "", require("./assets/sushi-plate1.jpg")))
    home5Images.appendChild(createImg("sushi-chef", "", require("./assets/sushi-chef1.jpg")))


  })();
  
  (function homeThree() {
    home.appendChild(createDiv("", "home3", ""));
    home3.appendChild(createDiv("", "locationTitle", ""))
    home3.textContent = '"Like traveling to japan but cheaper"'
    home3.style.backgroundImage = `url(${require("./assets/japan-img1.jpg")})`;
    
  })();

  (function homeFour() {
    home.appendChild(createDiv("", "home4", ""));
    // home4.appendChild(createDiv("", "map", "")) 
    // home4.appendChild(createDiv("", "gmaps", ""))
    home4.innerHTML = `
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.635931162731!2d6.638405551333324!3d46.515316579024905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2fb56734e7d9%3A0xeb173ddc525ce4b0!2sAv.%20Eglantine%205%2C%201006%20Lausanne!5e0!3m2!1sen!2sch!4v1641588203148!5m2!1sen!2sch" cursor="none" loading="lazy"></iframe>`;
    
  })();

}
// function initMap() {
//   var mapOptions = {
//     zoom: 8,
//     center: new google.maps.LatLng(44, -110),
//     mapTypeId: 'satellite'
//   };
// var map = new google.maps.Map(document.getElementById('map'), mapOptions);
// }



export { createHome}
