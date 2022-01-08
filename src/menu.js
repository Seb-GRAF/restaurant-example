import { createDiv, createImg, creatBtn } from "./module";
import "../styles/menu.scss";
import { items } from "./data/items";

function createMenu() {
  content.appendChild(createDiv("", "menu", ""));
  menu.appendChild(createDiv("", "menu1", ""))
  menu1.appendChild(createDiv("", "menuTitle", ""));
  menu1.appendChild(createDiv("", "menuContainer", ""));
  menuTitle.textContent = "Our assortment of sushis";

  for (let i = 0; i < items.length; i++) {
    menuContainer.appendChild(createDiv("", `menuItem${i}`, "menuItem"));

    const menuItem = document.getElementById(`menuItem${i}`);
    menuItem.appendChild(createDiv("", `itemImg${i}`, "itemImage"));

    const itemImg = document.getElementById(`itemImg${i}`);
    itemImg.appendChild(createImg("", "dishImg", items[i].image));

    menuItem.appendChild(createDiv("", `itemDescription${i}`, "itemDescription"))
    const itemDescription = document.getElementById(`itemDescription${i}`)
    itemDescription.appendChild(createDiv(items[i].name, "", "itemName"));
    itemDescription.appendChild(createDiv(items[i].price, "", "itemPrice"));
  }
}

export { createMenu };
