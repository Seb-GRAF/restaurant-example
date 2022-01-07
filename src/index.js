import "../styles/styles.scss";
import createHeader from "./header";
import { createCursor, cursorHover } from "./cursor";
import { createHome, wipeHome } from "./home";
import { createMenu } from "./menu";
import { createFooter } from "./footer";

createHeader();
createHome();
createFooter();

function clearPage() {
  const content = document.getElementById("content");
  content.removeChild(content.lastChild);
  content.removeChild(content.lastChild);
}

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  clearPage();
  createMenu();
  createFooter();
});
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  clearPage();
  createHome();
  createFooter();
});

document.querySelector("body").appendChild(createCursor());
document.addEventListener("mousemove", (e) => cursorHover(e));

const cursor = document.getElementById("cursor");
const map = document.getElementById("map");
map.addEventListener("mouseenter", () => {
  cursor.style.display = "none";
});
map.addEventListener("mouseleave", () => {
  cursor.style.display = "";
});
