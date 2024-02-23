/**
 * Возможно, вы знаете несколько довольно больших идеальных квадратов.
 * Но как насчет СЛЕДУЮЩЕГО?
 *
 * Выполните метод findNextSquare, который находит следующий
 * интегральный идеальный квадрат после переданного в качестве параметра.
 * Напомним, что целым идеальным квадратом является целое число n, такое,
 * что sqrt(n) также является целым числом.
 *
 * Если параметр сам по себе не является идеальным квадратом,
 * то должно быть возвращено -1.
 * Вы можете предположить, что параметр неотрицателен.
 */

function findNextSquare(sq) {
  const result = Math.sqrt(sq);

  return Number.isInteger(result) ? (result + 1) ** 2 : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(319225));
console.log(findNextSquare(15241383936));
console.log(findNextSquare(155));
console.log(findNextSquare(342786627));
