"use strict"; // here we go again

import { postsArr } from "./Js/posts.js";
import { makeTextElipsis } from "./Js/helperFunc.js";
import { generatePosts } from "./Js/functions.js";

const postContainerEl = document.querySelector(".posts-container");

console.log(postsArr);

generatePosts(postContainerEl);

// uzdeti event listeneri ant viso posts el, ir klausyti kada paspaudem ant m
// mygtuko
postContainerEl.addEventListener("click", function (event) {
  console.log("paspadem");

  // pasitikrinti ar paspaudem ant mygtuko

  // uzeti klase modalui open arba nuimti jei tokia yra
});
