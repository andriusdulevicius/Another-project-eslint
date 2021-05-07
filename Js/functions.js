import { postsArr } from "./posts.js";
import { makeTextElipsis } from "./helperFunc.js";

export function generatePosts(whereToPut) {
  let htmlArticleString = "";

  postsArr.forEach((post) => {
    htmlArticleString += `
      <article data-id=${post.id} >
          <h3>${makeTextElipsis(post.title, 4)}</h3>
          <p>${makeTextElipsis(post.body, 7)}</p>
          <button class='open-modal'>Read more</button> 
          <span>userId: ${post.userId}</span>
      </article>
      `;
  });
  whereToPut.innerHTML = htmlArticleString;
}

export function generatePostElements(whereToPut) {
  postsArr.forEach((post) => {
    const newArticle = document.createElement("article");
    newArticle.dataset.id = 1;

    const newTitle = document.createElement("h3");
    newTitle.textContent = makeTextElipsis(post.title, 4);

    const p = document.createElement("p");
    p.textContent = makeTextElipsis(post.body, 7);

    const newButton = document.createElement("button");
    newButton.className = "open-modal";
    newButton.textContent = "Read more";
    // newButton.addEventListener("click", toggleModal);

    newArticle.append(newTitle, p, newButton);
    whereToPut.appendChild(newArticle);
  });
}
