import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function initializeWebsite() {
  const content = document.getElementById("content");

  // nav bar
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  document.body.insertBefore(nav, content);

  // default load
  content.appendChild(loadHome());

  homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadHome());
  });

  menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadMenu());
  });

  contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadContact());
  });
}

initializeWebsite();
