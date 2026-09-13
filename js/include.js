fetch("../components/navbar.html")
  .then((Response) => Response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

fetch("../components/footer.html")
  .then((Response) => Response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("../components/review.html")
  .then((Response) => Response.text())
  .then((data) => {
    document.getElementById("review").innerHTML = data;
  });

// const text = "Our Services";
// const element = document.getElementById("text-typing");

// let index = 0;
// function typeText() {
//   if (index < text.length) {
//     element.textContent += text.charAt(index);
//     index++;
//     setTimeout(typeText, 100);
//   }
// }
// typeText();
