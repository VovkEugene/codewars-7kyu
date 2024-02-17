/**
 * Самый высокий и самый низкий
 * 
 * В этом небольшом задании вам дается строка чисел, разделенных пробелом, 
 * и вы должны вернуть наибольшее и наименьшее число.
 * 
 * Examples
 * highAndLow("1 2 3 4 5");  // return "5 1"
 * highAndLow("1 2 -3 4 5"); // return "5 -3"
 * highAndLow("1 9 3 4 -5"); // return "9 -5"
 */




function highAndLow(numbers) {
  return getHighest(numbers) + " " + getLowest(numbers);
}

function getNumbers(numbers) {
  return numbers.split(" ").map(Number);
}

function getHighest(numbers) {
  return getNumbers(numbers).reduce((prev, curr) =>
    prev > curr ? prev : curr
  );
}

function getLowest(numbers) {
  return getNumbers(numbers).reduce((prev, curr) =>
    prev < curr ? prev : curr
  );
}
