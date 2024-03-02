/**
 * Уникальный по Порядку
 *
 * Реализуйте функцию unique_in_order,
 * которая принимает в качестве аргумента последовательность
 * и возвращает список элементов без каких-либо элементов
 * с одинаковым значением рядом друг с другом
 * и сохранением исходного порядка элементов.
 *
 * For example:
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

function uniqueInOrder(iterable) {
  if (iterable.length == 0) {
    return [];
  }

  if (typeof iterable == "string") {
    iterable = [...iterable];
  }

  const len = iterable.length;
  const newArray = [iterable[0]];

  for (let i = 1; i < len; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      newArray.push(iterable[i]);
    }
  }

  return newArray;
}

function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}
