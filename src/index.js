import "../styles/styles.scss";
import createHeader from "./header";
import { createCursor, cursorHover } from "./cursor";
import { createHome, wipeHome } from "./home";
import { createMenu } from "./menu";
import { createStory } from "./story";
import { createContact } from "./contact";
import { createFooter } from "./footer";

createHeader();
createHome();
createFooter();

function clearPage() {
  const content = document.getElementById("content");
  content.removeChild(content.lastChild);
  content.removeChild(content.lastChild);
}

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  clearPage();
  createHome();
  createFooter();
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  clearPage();
  createMenu();
  createFooter();
});

const storyBtn = document.getElementById("storyBtn");
storyBtn.addEventListener("click", () => {
  clearPage();
  createStory();
  createFooter();
});

const ctcBtn = document.getElementById("ctcBtn");
ctcBtn.addEventListener("click", () => {
  clearPage();
  createContact();
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
