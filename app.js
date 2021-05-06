"use strict"; // here we go again

import { postsArr } from "./posts.js";

const postContainerEl = document.querySelector(".posts-container");

console.log(postsArr);

let htmlArticleString = "";

postsArr.forEach((post) => {
  htmlArticleString += `
    <article>
        <h3>${makeTextElipsis(post.title, 4)}</h3>
        <p>${makeTextElipsis(post.body, 7)}</p>
        <button>Read more</button> 
        <span>userId: ${post.userId}</span>
    </article>
    `;
});

postContainerEl.innerHTML = htmlArticleString;

function makeTextElipsis(text, howManyWords = 5) {
  return text.split(" ").slice(0, howManyWords).join(" ") + "...";
}

function isItANumber(dalykas) {
  if (!isNaN(+dalykas)) {
    console.log("skaicius");
  } else {
    console.log("neskaicius");
  }
}

isItANumber("kazkas");
isItANumber("    15  ");
