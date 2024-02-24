/**
 * Подсчитайте делители числа
 *
 * Подсчитайте количество делителей положительного целого числа n.
 *
 * Количество случайных тестов увеличивается до n = 500000.
 *
 * Examples (input --> output)
 * 4 --> 3 // we have 3 divisors - 1, 2 and 4
 * 5 --> 2 // we have 2 divisors - 1 and 5
 * 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
 * 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
 */

function getDivisorsCnt(n) {
  let counter = 0;

  if (n % Math.sqrt(n) == 0) {
    counter++;
  }

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      counter += 2;
    }
  }

  return counter;
}

//https://www.youtube.com/watch?v=naWoH27TPfc
