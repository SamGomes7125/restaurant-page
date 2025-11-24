import HeroImage from "./assets/hero.jpg";

export default function loadHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const img = document.createElement("img");
  img.src = HeroImage;
  img.alt = "Restaurant Hero";

  const title = document.createElement("h1");
  title.textContent = "Welcome to Sam's Kitchen";

  const tagline = document.createElement("p");
  tagline.textContent = "Where taste meets perfection.";

  hero.appendChild(img);
  hero.appendChild(title);
  hero.appendChild(tagline);

  const about = document.createElement("p");
  about.textContent =
    "Enjoy handcrafted meals made with love, premium ingredients, and authentic flavors from around the world. Experience comfort food at its finest.";

  home.appendChild(hero);
  home.appendChild(about);

  return home;
}
