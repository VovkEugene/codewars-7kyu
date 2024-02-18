/**
 * Бормотание
 *
 * На этот раз ни истории, ни теории.
 * В примерах ниже показано, как написать функцию накопления:
 *
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */

function accum(str) {
  return capitalizeCase(addHyphenBetweenWords(str));
}

function addHyphenBetweenWords(str) {
  let temp = [];
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j <= i; j++) {
      temp.push(str[i]);
    }

    temp.push("-");
  }

  return temp.slice(0, -1).join("");
}

function capitalizeCase(str) {
  const pattern = /^[a-z]/gi;
  const words = str.toLowerCase().split("-");

  return words
    .map((word) => word.replace(pattern, (char) => char.toUpperCase()))
    .join("-");
}
