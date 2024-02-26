/**
 * Достаточно маленький?
 *
 * Вам будет предоставлен массив и предельное значение.
 * Вы должны проверить, что все значения в массиве меньше
 * или равны предельному значению.
 * Если это так, верните true.
 * В противном случае верните false.
 *
 * Вы можете предположить, что все значения в массиве являются числами.
 */

function smallEnough(a, limit) {
  return a.every((number) => number <= limit);
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));
