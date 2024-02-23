/**
 * Найдите делители!
 *
 * Создайте функцию с именем divisors, которая принимает целое число n > 1 и
 * возвращает массив со всеми делителями целого числа (за исключением 1 и самого числа),
 * от наименьшего до наибольшего.
 * Если число простое, верните строку '(integer) is prime'
 *
 * Example:
 * divisors(12); // should return [2,3,4,6]
 * divisors(25); // should return [5]
 * divisors(13); // should return "13 is prime"
 */

function divisors(integer) {
  let array = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      array.push(i);
    }
  }

  return array.length == 0 ? `${integer} is prime` : array;
}
