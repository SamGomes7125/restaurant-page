export default function loadContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const address = document.createElement("p");
  address.textContent = "📍 123 Flavor Street, Melbourne, VIC 3000";

  const hours = document.createElement("p");
  hours.textContent = "⏰ Open Daily: 10 AM – 10 PM";

  const phone = document.createElement("p");
  phone.textContent = "📞  +61 457 123 987";

  contact.appendChild(title);
  contact.appendChild(address);
  contact.appendChild(hours);
  contact.appendChild(phone);

  return contact;
}
