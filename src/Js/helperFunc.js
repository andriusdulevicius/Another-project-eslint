import { postsArr } from "./posts.js";

function isItANumber(dalykas) {
  //   if (!isNaN(+dalykas)) {
  if (typeof +dalykas === "number" && !isNaN(dalykas)) {
    console.log("skaicius");
  } else {
    console.log("neskaicius");
  }
}

export function makeTextElipsis(text, howManyWords = 5) {
  return text.split(" ").slice(0, howManyWords).join(" ") + "...";
}

export function getArticleIdFromButton(btnEl) {
  let id = btnEl.parentElement.dataset.id;
  if (!id) throw new Error("article id not found");
  return id;
}

export function getBodyTextFromId(id) {
  return postsArr.find((postObj) => +id === postObj.id).body;
}
