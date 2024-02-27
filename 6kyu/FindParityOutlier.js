/**
 * Найдите Выброс четности
 *
 * Вам предоставляется массив (который будет иметь длину не менее 3,
 * но может быть очень большим), содержащий целые числа.
 * Массив либо полностью состоит из нечетных целых чисел,
 * либо полностью состоит из четных целых чисел,
 * за исключением единственного целого числа N.
 *
 * Напишите метод, который принимает массив в качестве аргумента
 * и возвращает этот "выброс" N.
 *
 * Examples
 * [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
 * [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
 */

function findOutlier(integers) {
  const evenNumber = getEven(integers);
  const oddNumber = getOdd(integers);

  return evenNumber.length < oddNumber.length
    ? Number(evenNumber)
    : Number(oddNumber);
}

function getEven(integers) {
  return integers.filter((item) => item % 2 == 0);
}

function getOdd(integers) {
  return integers.filter((item) => item % 2 != 0);
}
