"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

// console.log("Vi tester console.log og det er ret nørdet ✨");

// console.log(42);
// console.log(10 + 5);
// console.log("Jeg er 26 år");

// // Opgave 3
// const productTitle = "Fjallraven - Foldsack No. 1 Backpack";
// const productPrice = 849;
// const inStock = false;

// console.log(productTitle);
// console.log(productPrice);
// console.log(inStock);

// console.log(typeof productTitle); // skal vise "string"
// console.log(typeof productPrice); // skal vise "number"
// console.log(typeof inStock); // skal vise "boolean"

// // Opgave 3: Variabler og datatyper
// if (inStock) {
//   const testSection = document.querySelector("#test");
//   const html = `
//   <div>
//     <h3>Test: Produkt information</h3>
//     <p><strong>Titel:</strong> ${productTitle}</p>
//     <p><strong>Pris:</strong> ${productPrice} kr</p>
//     <p><strong>På lager:</strong> ${inStock}</p>
//   </div>
// `;
//   testSection.insertAdjacentHTML("beforeend", html);
// }

// // Opgave 3.4
// const productTitle2 = "Mens Casual Premium Slim Fit T-Shirts";
// const productPrice2 = 179;
// const inStock2 = true;

// console.log(productTitle2);
// console.log(productPrice2);
// console.log(inStock2);

// if (inStock2) {
//   const testSection2 = document.querySelector("#test2");
//   const html2 = `
//   <div>
//     <h3>Test: Produkt information 2</h3>
//     <p><strong>Titel:</strong> ${productTitle2}</p>
//     <p><strong>Pris:</strong> ${productPrice2} kr</p>
//     <p><strong>På lager:</strong> ${inStock2}</p>
//   </div>
//   `;
//   testSection2.insertAdjacentHTML("beforeend", html2);
// }

// // Opgave 4 (Conditionals)
// // Del 1
// if (inStock) {
//   console.log(`${productTitle}er på lager!`);
// } else {
//   console.log(`${productTitle}er desværre ikke på lager!`);
// }

// // Del 3
// if (productPrice > productPrice2) {
//   console.log(`${productTitle} er dyrest og koster ${productPrice} kr`);
// } else {
//   console.log(`${productTitle2} er dyrest og koster ${productPrice2} kr`);
// }

// // Del 4
// if (productPrice < productPrice2) {
//   console.log(`${productTitle} er billigst og koster ${productPrice} kr`);
// } else {
//   console.log(`${productTitle2} er billigst og koster ${productPrice2} kr`);
// }

// // Del 5
// if (inStock) {
//   const testSection = document.querySelector("#test");
//   testSection.insertAdjacentHTML(
//     "beforeend",
//     `<p style="color: green;">${productTitle} - På lager</p>`,
//   );
// } else {
//   const testSection = document.querySelector("#test");
//   testSection.insertAdjacentHTML(
//     "beforeend",
//     `<p style="color: red;">${productTitle} - Ikke på lager</p>`,
//   );
// }

// if (inStock2) {
//   const testSection2 = document.querySelector("#test2");
//   testSection2.insertAdjacentHTML(
//     "beforeend",
//     `<p style="color: green;">${productTitle2} - På lager</p>`,
//   );
// } else {
//   const testSection2 = document.querySelector("#test2");
//   testSection2.insertAdjacentHTML(
//     "beforeend",
//     `<p style="color: red;">${productTitle2} - Ikke på lager</p>`,
//   );
// }

// Opgave 5 - Objects

const product1 = {
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 849,
  inStock: true,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "Bags",
};

const product2 = {
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 179,
  inStock: true,
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for breathable and comfortable wearing.",
  category: "Men's clothing",
};

const product3 = {
  title: "Mens Cotton Jacket",
  price: 55.99,
  inStock: true,
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  description:
    "Great outerwear jackets for Spring/Autumn/Winter, suitable for any occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors",
  category: "Men's Clothing",
};

console.log(product1.title); // viser kun titlen på første produkt
console.log(product2); // viser alle properties til objektet
console.log(product3);

// Vis "På lager" eller "Udsolgt" i stedet for true/false.
// Kan jeg ikke helt se ????

let stockText;
let stockClass;
if (product1.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

// Viser produkt informationer i test-sektionen
const html = /*html*/ `
  <article class="product-card">
    <img src="${product1.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product1.title}</h2>
      <p class="product-description">${product1.description}</p>
      <p class="product-price">${product1.price} kr</p>
    </div>
  </article>

  <article class="product-card">
    <img src="${product2.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product2.title}</h2>
      <p class="product-description">${product2.description}</p>
      <p class="product-price">${product2.price} kr</p>
    </div>
  </article>

  <article class="product-card">
    <img src="${product3.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product3.title}</h2>
      <p class="product-description">${product3.description}</p>
      <p class="product-price">${product3.price} kr</p>
    </div>
  </article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);

// Opgave 6 - Arrays

// Lav et array med de tre produkttitler og gem det i variablen productTitles
const productTitles = [
  "Fjallraven - Foldsack No. 1 Backpack",
  "Mens Casual Premium Slim Fit T-Shirts",
  "Mens Cotton Jacket",
];

// Udskriv længden af arrayet i konsollen.
console.log(productTitles.length);

// Hvordan tilgår vi de enkelte elementer i et array? Når du har fundet ud af det,
// skal du udskrive alle produkttitlerne fra productTitles i konsollen.
console.log(productTitles[0]);
console.log(productTitles[1]);
console.log(productTitles[2]);

// Del 2
// Definer variablen products / i products skal alle products (1, 2 og 3 gemmes)

const products = [
  {
    title: "Produkt 1",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 849,
    inStock: true,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    category: "Bags",
  },
  {
    title: "Produkt 2",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight &amp; soft fabric for breathable and comfortable wearing.",
    price: 179,
    inStock: true,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    category: "Men's clothing",
  },
  {
    title: "Produkt 3",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for any occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors",
    price: 55.99,
    inStock: true,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    category: "Men's clothing",
  },
];

// Del 3

// Udskriv hele arrayet products til konsollen
console.log(products);

// Udskriv første og sidste element (objekt) i products. Hint: brug index 0 for første og products.length - 1 for sidste.
console.log(products[0]);
console.log(products[products.length - 1]);

// Udskriv title og inStock på første element i products.
console.log(products[0].title);
console.log(products[0].inStock);

//Udskriv price og category på sidste element i products.
console.log(products[products.length - 1].price);
console.log(products[products.length - 1].category);

// Del 4

//Nu skal du vise første produkt fra productsarrayet på siden (i #testsektionen).
// const html4 = `
//   <article class="product-card">
//     <img src="${products[0].image}" class="product-image">
//     <div class="product-info">
//       <h2 class="product-name">${products[0].title}</h2>
//       <p class="product-description">${products[0].description}</p>
//       <p class="product-price">${products[0].price} kr</p>
//     </div>
//   </article>
// `;
// document.querySelector("#test").insertAdjacentHTML("beforeend", html4);

// Opgave 7 - Loops
// Lav et for loop der går igennem alle produkter i products arrayet.
// I loopet skal du udskrive hvert produkts title til konsollen.
let htmlContent = "";
for (let i = 0; i < products.length; i++) {
  console.log(products[i].title);

  // Byg HTML for hvert produkt
  htmlContent += `
    <article class="product-card">
      <img src="${products[i].image}" class="product-image">
      <div class="product-info">
        <h2 class="product-name">${products[i].title}</h2>
        <p class="product-description">${products[i].description}</p>
        <p class="product-price">${products[i].price} kr</p>
      </div>
    </article>
  `;
}

// Indsæt alle produkter på siden
document.querySelector("#test").insertAdjacentHTML("beforeend", htmlContent);
