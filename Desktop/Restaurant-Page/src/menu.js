import Item1 from "./assets/food1.jpg";
import Item2 from "./assets/food2.jpg";
import Item3 from "./assets/food3.jpg";
import Item4 from "./assets/food4.jpg";
import Item5 from "./assets/food5.jpg";

export default function loadMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  const items = [
    { name: "Grilled Peri-Peri Chicken", price: "$14", img: Item1 },
    { name: "Creamy Alfredo Pasta", price: "$12", img: Item2 },
    { name: "Classic Beef Burger", price: "$11", img: Item3 },
    { name: "Spicy Thai Noodles", price: "$13", img: Item4 },
    { name: "Veggie Delight Pizza", price: "$15", img: Item5 },
  ];

  const container = document.createElement("div");
  container.classList.add("menu-items");

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const img = document.createElement("img");
    img.src = item.img;

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.textContent = item.price;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    container.appendChild(card);
  });

  menu.appendChild(title);
  menu.appendChild(container);

  return menu;
}
