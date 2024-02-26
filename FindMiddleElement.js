/**
 * Найдите средний элемент
 *
 * Как часть этого Ката, вам нужно создать функцию, которая
 * при наличии триплета возвращает индекс числового элемента,
 * который находится между двумя другими элементами.
 *
 * Входными данными для функции будет массив из трех различных чисел.
 *
 * For example:
 * gimme([2, 3, 1]) => 0
 *
 * 2 - это число, которое помещается между 1 и 3,
 * а индекс 2 во входном массиве равен 0.
 *
 * Еще один пример (просто чтобы убедиться, что это понятно):
 * gimme([5, 10, 14]) => 1
 *
 * 10 - это число, которое находится в диапазоне от 5 до 14,
 * а индекс 10 во входном массиве равен 1.
 */

function gimme(triplet) {
  return triplet.indexOf(getSecond(triplet));
}

function getSecond(triplet) {
  return [...triplet].sort((a, b) => a - b)[1];
}