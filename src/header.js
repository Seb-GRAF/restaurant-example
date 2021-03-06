import { createDiv, createImg, createBtn } from "./module";
import "../styles/header.scss";

function createHeader() {
  
  const header = document.createElement("header");
  content.appendChild(header);
  header.appendChild(createDiv("", "headerMain", ""))
  headerMain.appendChild(createDiv("", "left"));
  headerMain.appendChild(createDiv("", "right"));

  left.appendChild(createLogo());
  right.appendChild(createBtn("Home", "homeBtn", "headerBtn"));
  right.appendChild(createBtn("Menu", "menuBtn", "headerBtn"));
  right.appendChild(createBtn("Our Story", "storyBtn", "headerBtn"));
  right.appendChild(createBtn("Contact", "ctcBtn", "headerBtn"));
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
