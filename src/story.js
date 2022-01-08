import { createDiv, createBtn, createImg } from "./module";
import "../styles/story.scss";

function createStory() {
  content.appendChild(createDiv("", "story", ""));

  story.appendChild(createDiv("", "emptyDiv", ""));

  emptyDiv.style.backgroundImage = `url(${require("./assets/sakura.jpg")})`;
  story.appendChild(createDiv("", "story1", ""));

  story1.appendChild(createDiv("", "content1Main", ""));
  content1Main.appendChild(createDiv("", "content1Title", "contentTitle"));
  content1Main.appendChild(createDiv("", "separator1", "separator"));
  content1Main.appendChild(createDiv("", "content1Text", "contentText"));
  story1.appendChild(createDiv("", "content1Video", ""));
  content1Video.innerHTML = `
  <iframe id="video1" src="https://www.youtube.com/embed/0i9Hht-OZRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  
  content1Title.textContent = "SUSHI SPECIALIZED RESTAURANT WITH AN ATMOSPHERE";
  separator1.textContent = "﹏﹏";
  content1Text.textContent =
  "Located in the center of Lausanne, Yumi Sushi opened its doors to those looking for exquisite dining in a traditional Sushi restaurant. They offer a wide range of fresh fish including maki, sushi, sashimi and california rolls. It is with great pride that all their dishes are made in-house. They have inspired a whole new generation of fine Japanese artistry. With over 20 different items you are sure to find many satisfying choices of your favourite sushi!";
  
  story.appendChild(createDiv("", "story2", ""));
  story2.appendChild(createDiv("", "content2Image", ""));
  content2Image.style.backgroundImage = `url(${require("./assets/restaurant-img2.jpg")})`;
  
  story2.appendChild(createDiv("", "content2Main", ""));
  content2Main.appendChild(createDiv("", "content2Title", "contentTitle"));
  content2Main.appendChild(createDiv("", "separator2", "separator"));
  content2Main.appendChild(createDiv("", "content2Text", "contentText"));
  
  
  content2Title.textContent = "ELEGANT DINING EXPERIENCE"
  separator2.textContent = "﹏﹏";
  content2Text.textContent = "Whether you want to entertain your business client, relax after a hard day’s shopping, or have a night on the town, Kiko Sushi Bar offers a casual, yet elegant dining experience. Offering an assortment of table sizes and a sushi bar, you can enjoy an intimate dinner for 2 or eat out with the office lunch crowd. Take out service is also available. Locally owned by a family whose dream was to open their own Japanese restaurant, Kiko Sushi Bar is their own Cinderella story. They were fascinated by the Japanese desire for perfection in food quality and artistic expression. Although all are good cooks themselves, they are fortunate to have a chef that is specially trained by a Japanese Sushi Master in Vancouver, having over a dozen year’s experience. So if you want to know what it is like to have a fairy godmother, come to Kiko Sushi Bar, where your culinary dream can come true."
}

export { createStory };
