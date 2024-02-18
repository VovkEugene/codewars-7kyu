/**
 * Бывшие и Охи
 *
 * Проверьте, содержит ли строка одинаковое количество символов "x" и "o".
 * Метод должен возвращать логическое значение и не учитывать регистр.
 * Строка может содержать любой символ.
 *
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */

function XO(str) {
  let countX = 0;
  let countY = 0;

  str = str.toLowerCase();

  for (let char of str) {
    if (char === "x") {
      countX++;
    }

    if (char === "o") {
      countY++;
    }
  }

  return countX == countY;
}
