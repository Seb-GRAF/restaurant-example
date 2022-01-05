import sushi1 from "./assets/sushi1.png"


function createHome() {
  const content = document.getElementById("content");
  const homeSushi = new Image();
  homeSushi.src = sushi1;
  content.appendChild(createDiv("", "home", ""));
  home.appendChild(createDiv("", "homeLeft", ""));
  home.appendChild(createDiv("", "homeRight", ""));
  homeLeft.appendChild(createDiv("", "homeTitle", ""));
  homeLeft.appendChild(createDiv("", "separator", ""));
  homeLeft.appendChild(createDiv("", "homeTitle2", ""));
  homeLeft.appendChild(createDiv("", "homeTxt1", ""));

  homeTitle.textContent = "いしいお寿司";
  separator.textContent = "﹏﹏﹏"
  homeTitle2.textContent = "Yummy sushi";
  homeTxt1.textContent = "Discover the world of fresh homemade sushi. Unlike most other sushi shops, we use fresh fish delivered every day before opening. Our skilled sushi chef will make your mouth water!"

  homeRight.appendChild(homeSushi)
}

function createDiv(divName, divId, divClass) {
  const div = document.createElement("div");
  div.setAttribute("id", divId);
  div.textContent = divName;
  if (divClass !== "") div.classList.add(divClass);
  return div;
}

export default createHome;
