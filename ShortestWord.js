/**
 * Самое короткое слово
 *
 * Дана строка слов, верните длину самого короткого слова(ов).
 *
 * Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
 */

function findAllShortWords(str) {
  const shortestLength = findShort(str);

  return str
    .split(" ")
    .filter((word) => word.length == shortestLength)
    .join(" ");
}

function findShort(str) {
  return str
    .split(" ")
    .map((word) => word.length)
    .reduce((prev, curr) => (prev > curr ? curr : prev));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
