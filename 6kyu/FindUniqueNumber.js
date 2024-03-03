/**
 * Найдите уникальный номер
 *
 * Существует массив с некоторыми числами.
 * Все числа равны, кроме одного.
 * Попробуйте найти его!
 *
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 *
 * Гарантируется, что массив содержит как минимум 3 числа.
 * Тесты содержат несколько очень больших массивов,
 * поэтому подумайте о производительности.
 */

function findUniq(arr) {
  const firstItem = arr[0];
  const arrayLength = arr.length;

  for (let i = 1; i < arrayLength; i++) {
    if (firstItem == arr[i]) {
      return Array.from(new Set(arr))[1];
    }
  }

  return firstItem;
}
