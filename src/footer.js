import { createBtn, createDiv, createImg } from "./module";
import "../styles/footer.scss";

function createFooter() {
  const footer = document.createElement("footer");
  content.appendChild(footer);

  footer.appendChild(createDiv("", "hours", ""));
  const github = document.createElement("a")
  github.setAttribute("href", "https://github.com/MorePog")
  footer.appendChild(github)
  github.appendChild(createImg("github", "", require("./assets/github.png")));
  footer.appendChild(createDiv("", "address", ""));

  hours.innerHTML = `
    <span>Open Tuesday to Sunday</span>
    <span>11h30 - 14h00</span>
    <span>18h30 - 23h00</span>
  `;
  address.innerHTML = `
  <span>yumi@sushi.ch</span>
  <span>+41 21 123 45 67</span>
  `;
}

export { createFooter };
