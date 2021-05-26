import postsArr from './posts.js';

export function isItANumber(dalykas) {
  //   if (!isNaN(+dalykas)) {
  if (typeof +dalykas === 'number' && !Number.isNaN(dalykas)) {
    return 'Skaicius';
  }
  return 'Neskaicius';
}

export function makeTextElipsis(text, howManyWords = 5) {
  return `${text.split(' ').slice(0, howManyWords).join(' ')}...`;
}

export function getArticleIdFromButton(btnEl) {
  const { id } = btnEl.parentElement.dataset;
  if (!id) throw new Error('article id not found');
  return id;
}

export function getBodyTextFromId(id) {
  return postsArr.find((postObj) => +id === postObj.id).body;
}
