const items = [];
class Dish {
  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
}
function createDish(image, name, price) {
  let item = new Dish(image, name, price);
  items.push(item);
}

createDish(
  require("./itemsImg/nigiri-unagi.png"),
  "Unagi Nigiri (eel)",
  "2.5CHF/p"
);

createDish(
  require("./itemsImg/nigiri-salmon.png"),
  "Salmon Nigiri",
  "1.5CHF/p"
);

createDish(
    require("./itemsImg/nigiri-thuna.png"),
    "Thuna Nigiri",
    "2CHF/p"
);

createDish(
    require("./itemsImg/musubi-spam.png"),
    "Spam Musubi",
    "2CHF/p"
);

createDish(
  require("./itemsImg/california-bonito.png"),
  "Thuna and bonito flakes California",
  "2CHF/p"
);

createDish(
  require("./itemsImg/california-salmon.png"),
  "Salmon and avocado California",
  "1.5CHF/p"
);

createDish(
  require("./itemsImg/california-shrimp.png"),
  "Shrimp and fish eggs California",
  "2CHF/p"
);

createDish(
  require("./itemsImg/tamaki-vege.png"),
  "Vegetarian Tamaki",
  "1.5CHF/p"
);

createDish(
  require("./itemsImg/maki-pork.png"),
  "Marinated pork Maki",
  "2.5CHF/p"
);

createDish(
    require("./itemsImg/maki-salmon.png"),
  "Salmon Maki",
  "1.5CHF/p"
);

createDish(
    require("./itemsImg/maki-thuna.png"),
"Thuna Maki",
"1.5CHF/p"
);


createDish(
  require("./itemsImg/sashimi-salmon.png"),
  "Salmon Sashimi",
  "2CHF/p"
);


export { items };
