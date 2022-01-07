import { createDiv, createImg, createBtn } from "./module";
import "../styles/header.scss";

function createHeader() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  content.appendChild(header);

  header.appendChild(createDiv("", "left"));
  header.appendChild(createDiv("", "right"));

  left.appendChild(createLogo());
  right.appendChild(createBtn("Home", "homeBtn", "headerBtn"));
  right.appendChild(createBtn("Menu", "menuBtn", "headerBtn"));
  right.appendChild(createBtn("Our Story", "ctcBtn", "headerBtn"));
  right.appendChild(createBtn("Contact Us", "abtBtn", "headerBtn"));

//   logo.addEventListener("mouseenter", () => {
//       document.getElementById("logoText1").textContent = "GI";
//       document.getElementById("logoText2").textContent = "RI";
//   });
//   logo.addEventListener("mouseleave", () => {
//     document.getElementById("logoText1").textContent = "YU";
//     document.getElementById("logoText2").textContent = "MI";
//   });
}

function createLogo() {
  const logo = createDiv("", "logo", "logo");
  const logoText1 = document.createElement("span");
  const logoText2 = document.createElement("span");
  logoText1.setAttribute("id", "logoText1");
  logoText2.setAttribute("id", "logoText2");
  logoText1.textContent = "YU";
  logoText2.textContent = "MI";
  logo.appendChild(logoText1);
  logo.appendChild(logoText2);
  return logo;
}

export default createHeader;
