import "../styles/styles.scss";
import createHeader from "./header";
import { createCursor, cursorHover } from "./cursor";
import { createHome, wipeHome } from "./home";
import { createMenu } from "./menu";

createHeader();
createHome();

function clearPage() {
  const content = document.getElementById("content");
  content.removeChild(content.lastChild);
}

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  clearPage();
  createMenu();
});
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
  clearPage();
  createHome();
});

// document.querySelector("html").appendChild(createCursor());
// document.addEventListener("mousemove", (e) => cursorHover(e));
