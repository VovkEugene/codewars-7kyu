/**
 * Сумма цифр / Цифровой корень
 *
 * Цифровой корень - это рекурсивная сумма всех цифр в числе.
 * Учитывая n, возьмите сумму цифр из n.
 * Если это значение содержит более одной цифры, продолжайте уменьшать
 * таким образом, пока не получится однозначное число.
 *
 * Входными данными будет неотрицательное целое число.
 *
 * Examples
 *     16  -->  1 + 6 = 7
 *    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 * 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 * 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

function digitalRoot(n) {
  if (n < 10) {
    return n;
  }

  let sum = 0;

  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return digitalRoot(sum);
}
