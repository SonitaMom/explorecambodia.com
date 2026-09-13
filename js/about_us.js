import { page_hero } from "./reusable/hero.js";
document.querySelector("#aboutUs").innerHTML = page_hero({
  image: "../asset/image/contact/angkor_sunrise.webp",
  imagename: "Angkor wat",
  title: "About Us",
  description:
    "We are here to answer all your questions about travelling to Cambodia.",
  about_link: "../Pages/about-me.html",
  contact_link: "../Pages/contact.html",
  contact_hero: "About us",
});
