"use strict"; // here we go again

import { postsArr } from "./Js/posts.js";
import { generatePosts, generatePostElements } from "./Js/functions.js";
import { getArticleIdFromButton, getBodyTextFromId } from "./Js/helperFunc.js";

// nuorodos i html el
const postContainerEl = document.querySelector(".posts-container");
const modalEl = document.querySelector(".modal");

console.log(postsArr);

generatePosts(postContainerEl);
// generatePostElements(postContainerEl);

// uzdeti event listeneri ant viso posts el, ir klausyti kada paspaudem ant m
// mygtuko
postContainerEl.addEventListener("click", function (event) {
  console.log(event.target);

  // pasitikrinti ar paspaudem ant mygtuko
  if (event.target.classList.contains("open-modal")) {
    console.log("paspadem ant mygtuko");
    modalEl.classList.toggle("open");
    let articleId = getArticleIdFromButton(event.target);
    // console.log(articleId);
    let bodyText = getBodyTextFromId(articleId);
    console.log("bodyText", bodyText);
    // perkelti bodyText i modalo paragrafa
  }

  // uzeti klase modalui open arba nuimti jei tokia yra

  // uzpildyti modala su duomenimis is to posto ant kurio paspausta

  // gauti ant kurio post mes paspaudem

  // tarp postArr paieskoti posto su tuo id

  // paimti is to posto body texta

  // ir tuo tekstu uzpildyti modalo paragrafa
});
