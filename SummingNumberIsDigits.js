/**
 * Суммирование цифр числа
 *
 * Напишите функцию с именем sumDigits, которая принимает число
 * в качестве входных данных и возвращает сумму абсолютного значения каждой
 * из десятичных цифр числа.
 *
 * For example: (Input --> Output)
 * 10 --> 1
 * 99 --> 18
 * -32 --> 5
 */
function sumDigits(number) {
  if (number < 0) {
    number = Math.abs(number);
  }

  return String(number)
    .split("")
    .map((num) => Number(num))
    .reduce((acc, value) => acc + value);
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
