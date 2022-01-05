function createHeader() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  content.appendChild(header);

  header.appendChild(createDiv("", "left"));
  header.appendChild(createDiv("", "right"));

  left.appendChild(createLogo());
  right.appendChild(creatBtn("Home", "homeBtn", "headerBtn"));
  right.appendChild(creatBtn("Menu", "menuBtn", "headerBtn"));
  right.appendChild(creatBtn("Our Story", "ctcBtn", "headerBtn"));
  right.appendChild(creatBtn("Contact Us", "abtBtn", "headerBtn"));

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

function creatBtn(btnName, btnId, btnClass) {
  const btn = document.createElement("button");
  btn.setAttribute("id", btnId);
  btn.textContent = btnName;
  if (btnClass !== "") btn.classList.add(btnClass);
  return btn;
}

function createDiv(divName, divId, divClass) {
  const div = document.createElement("div");
  div.setAttribute("id", divId);
  div.textContent = divName;
  if (divClass !== "") div.classList.add(divClass);
  return div;
}
export default createHeader;
