/**Даны два целых числа a и b,
 * которые могут быть положительными или отрицательными,
 * найдите сумму всех целых чисел между ними и включая их и верните ее.
 * Если два числа равны, верните a или b.
 */

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let count = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      count += i;
    }

    return count;
  }

  if (a > b) {
    for (let i = a; i >= b; i--) {
      count += i;
    }

    return count;
  }
}
