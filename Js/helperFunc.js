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
