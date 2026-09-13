import { page_hero } from "./reusable/hero.js";

document.querySelector("#contactHero").innerHTML = page_hero({
  image: "../asset/image/contact/angkor_sunrise.webp",
  imagename: "Angkor Wat",
  title: "Contact",
  description:
    "We are here to answer all your questions about traveling to Cambodia.",
  about_link: "../Pages/about-me.html",
  contact_link: "../Pages/contact.html",
  contact_hero: "contact-hero",
});
