import { postsArr } from "./posts.js";
import { makeTextElipsis } from "./helperFunc.js";

export function generatePosts(whereToPut) {
  let htmlArticleString = "";

  postsArr.forEach((post) => {
    htmlArticleString += `
      <article>
          <h3>${makeTextElipsis(post.title, 4)}</h3>
          <p>${makeTextElipsis(post.body, 7)}</p>
          <button class='open-modal'>Read more</button> 
          <span>userId: ${post.userId}</span>
      </article>
      `;
  });
  whereToPut.innerHTML = htmlArticleString;
}
