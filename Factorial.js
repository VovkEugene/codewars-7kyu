/**
 * В математике факториал неотрицательного целого числа n, обозначаемый n!,
 * является произведением всех положительных целых чисел, меньших или равных n.
 * Например: 5! = 5 * 4 * 3 * 2 * 1 = 120.
 * По соглашению значение 0! равно 1.
 *
 * Напишите функцию для вычисления факториала для заданных входных данных.
 * Если входные данные ниже 0 или выше 12, генерируется исключение RangeError.
 */

function factorial(n) {
  if (n < 0 || n > 12) {
    throw "RangeError";
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(-2));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
