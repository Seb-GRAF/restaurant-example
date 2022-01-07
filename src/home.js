import { createDiv, createImg, creatBtn } from "./module";
import "../styles/home.scss";

function createHome() {
  const content = document.getElementById("content");
  content.appendChild(createDiv("", "home", ""));
  home.appendChild(createDiv("", "homeLeft", ""));
  home.appendChild(createDiv("", "homeRight", ""));
  homeRight.appendChild(createImg("homeImg1", "homeImg", require("./assets/sushi2.png")));
  homeLeft.appendChild(createDiv("", "homeTitle", ""));
  homeLeft.appendChild(createDiv("", "separator", ""));
  homeLeft.appendChild(createDiv("", "homeTitle2", ""));
  homeLeft.appendChild(createDiv("", "homeTxt1", ""));

  homeTitle.textContent = "すし";
  separator.textContent = "﹏﹏";
  homeTitle2.textContent = "Yummy sushi";
  homeTxt1.textContent =
    "Discover the world of fresh homemade sushi. Unlike most other sushi shops, we use fresh fish delivered every day before opening. Our skilled sushi chef will make your mouth water!";


  // home.style.transition = "0.2s";
  // home.style.transform = "translate(-120%, 0%)";

  home.style.transform = "none";
}


export { createHome};
