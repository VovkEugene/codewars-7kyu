/**
 * Единицы и нули
 *
 * Дан массив единиц и нулей,
 * преобразуйте эквивалентное двоичное значение в целое число.
 *
 * Например,: [0, 0, 0, 1] обрабатывается как 0001,
 * что является двоичным представлением 1.
 */

function binaryArrayToNumber(arr) {
  let result = 0;

  for (let item of arr) {
    result = result * 2 + item;
  }

  return result;
}

// function binaryArrayToNumber(arr) {
//   const str = arr.join("");

//   return parseInt(str, 2);
// }
