/**
 * Найдите нечетное значение int
 *
 *
 * Дан массив целых чисел, найдите то,
 * которое появляется нечетное количество раз.
 *
 * Всегда будет только одно целое число,
 * которое появляется нечетное количество раз.
 *
 * Examples
 * [7] должно возвращать 7, потому что это происходит 1 раз (что нечетно).
 * [0] должно возвращать 0, потому что это происходит 1 раз (что нечетно).
 * [1,1,2] должно возвращать 2, потому что это происходит 1 раз (что нечетно).
 * [0,1,0,1,0] должно возвращать 0, потому что оно встречается 3 раза (что нечетно).
 * [1,2,2,3,3,3,4,3,3,3,2,2,1] должно возвращать 4, потому что оно появляется 1 раз
 * (что нечетно).
 */

function findOdd(a) {
  const obj = createObjDuplicates(a);
  const value = +Object.values(obj).filter((num) => num % 2 != 0);

  return getKey(obj, value);
}

function createObjDuplicates(array) {
  const obj = {};

  for (let num of array) {
    if (!obj.hasOwnProperty(num)) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }

  return obj;
}

function getKey(obj, value) {
  return +Object.keys(obj).find((key) => obj[key] === value);
}

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
