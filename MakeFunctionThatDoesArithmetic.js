/**
 * Создайте функцию, которая выполняет арифметические действия!
 *
 * Даны два числа и арифметический оператор (его название в виде строки),
 * верните результат двух чисел, для которых использовался этот оператор.
 *
 * a и b оба будут целыми положительными числами,
 * и a всегда будет первым числом в операции, а b всегда вторым.
 *
 * Четыре оператора - это "сложение", "вычитание", "деление", "умножение".
 */

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return "operation not available";
  }
}

console.log(arithmetic(1, 2, "add"));
console.log(arithmetic(8, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply"));
console.log(arithmetic(8, 2, "divide"));
