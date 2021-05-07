"use strict"; // here we go again

import { postsArr } from "./Js/posts.js";
import { makeTextElipsis } from "./Js/helperFunc.js";
import { generatePosts, generatePostElements } from "./Js/functions.js";

const postContainerEl = document.querySelector(".posts-container");

console.log(postsArr);

generatePosts(postContainerEl);
// generatePostElements(postContainerEl);

// uzdeti event listeneri ant viso posts el, ir klausyti kada paspaudem ant m
// mygtuko
postContainerEl.addEventListener("click", function (event) {
  console.log("paspadem");
  console.log(event.target);

  // pasitikrinti ar paspaudem ant mygtuko

  // uzeti klase modalui open arba nuimti jei tokia yra

  // uzpildyti modala su duomenimis is to posto ant kurio paspausta
});
