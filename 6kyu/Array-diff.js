/**
 * Ваша цель в этом ката - реализовать функцию разности,
 * которая вычитает один список из другого и возвращает результат.
 *
 * Она должна удалить все значения из списка a,
 * которые присутствуют в списке b, сохраняя их порядок.
 *
 * arrayDiff([1,2],[1]) == [2]
 *
 * Если значение присутствует в b, все его вхождения должны быть удалены из другого:
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
  if (a.length == 0 || b.length == 0) {
    return a;
  }

  const firstLength = a.length;
  const secondLength = b.length;

  for (let i = 0; i < firstLength; i++) {
    for (let j = 0; j < secondLength; j++) {
      if (a[i] == b[j]) {
        a[i] = null;
        break;
      }
    }
  }

  return a.filter((item) => item != null);
}

// function arrayDiff(a, b) {
//     return a.filter(item => !b.includes(item));
//   }

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
console.log(arrayDiff([1, 2, 3, 2, 1], [1, 2]));

console.log(arrayDiff([-10, -17, 8, 18, 18, -17, 18, -2], [-10, -17, 8, 18]));
console.log(
  arrayDiff(
    [12, -8, 14, 11, 6, -14, 3, 7, 15, -17, 10, -11, 14],
    [12, -8, 14, 11, 6, -14, 3, 7, 15, -17, 10, -11]
  )
);
