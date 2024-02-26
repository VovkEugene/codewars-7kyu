/**
 * Не ставь мне пять!
 *
 * В этом ката вы получаете начальный номер и конечный номер региона и
 * должны вернуть количество всех чисел, кроме чисел с 5 в нем.
 * Начальный и конечный номера указаны включительно!
 *
 * Examples:
 * 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
 * 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
 */

function dontGiveMeFive(start, end) {
  let count = 0;
  let str = "";

  for (let i = start; i <= end; i++) {
    str = i.toString();

    if (str.includes("5")) {
      continue;
    }

    count++;
  }

  return count;
}
