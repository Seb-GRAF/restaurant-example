import { createDiv, createImg, creatBtn } from "./module";
import "../styles/home.scss";

function createHome() {
  content.appendChild(createDiv("", "home", ""));
  //home1
  home.appendChild(createDiv("", "home1", ""));
  home1.style.backgroundImage = `url(${require("./assets/restaurant-img1.jpg")})`;

  //home2
  home.appendChild(createDiv("", "home2", ""));
  home2.appendChild(createDiv("", "homeLeft", ""));
  homeLeft.appendChild(createDiv("", "homeTitle", ""));
  homeLeft.appendChild(createDiv("", "separator", ""));
  homeLeft.appendChild(createDiv("", "homeTitle2", ""));
  home2.appendChild(createDiv("", "homeRight", ""));
  homeRight.appendChild(createDiv("", "homeTxt1", ""));
  homeTitle.textContent = "すし";
  separator.textContent = "﹏﹏";
  homeTitle2.textContent = "Yumi sushi";
  homeTxt1.textContent =
    "Discover the world of fresh homemade sushi. Unlike most other sushi shops, we use fresh fish delivered every day before opening. Our skilled sushi chef will make your mouth water!";

  //home3
  home.appendChild(createDiv("", "home3", ""));
  home3.appendChild(createDiv("", "home3Images", ""));
  home3Images.appendChild(createDiv("", "img1", ""));
  home3Images.appendChild(createDiv("", "img2", ""));
  img1.appendChild(
    createImg("sushi-plate", "", require("./assets/sushi-plate1.jpg"))
  );
  img2.appendChild(
    createImg("sushi-chef", "", require("./assets/sushi-chef1.jpg"))
  );

  //home4
  home.appendChild(createDiv("", "home4", ""));
  home4.appendChild(createDiv("", "locationTitle", ""));
  home4.textContent = '"Like traveling to japan but cheaper"';
  home4.style.backgroundImage = `url(${require("./assets/japan-img1.jpg")})`;

  //home5
  home.appendChild(createDiv("", "home5", ""));
  
  home5.appendChild(createDiv("", "googleMaps", ""));
  googleMaps.innerHTML = `
  <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.635931162731!2d6.638405551333324!3d46.515316579024905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2fb56734e7d9%3A0xeb173ddc525ce4b0!2sAv.%20Eglantine%205%2C%201006%20Lausanne!5e0!3m2!1sen!2sch!4v1641588203148!5m2!1sen!2sch" cursor="none" loading="lazy"></iframe>`;

  
  home5.appendChild(createDiv("", "addressText", ""));
  addressText.appendChild(createDiv("", "address1", ""));
  addressText.appendChild(createDiv("", "address2", ""));

  address1.textContent = "Find us at:"
  address2.textContent = "Eglantine 5 !"
}

export { createHome };
