/**
 * Stop gninnipS My sdroW!
 *
 * Напишите функцию, которая принимает строку из одного или нескольких слов
 * и возвращает ту же строку, но со всеми словами, в которых пять или более букв
 * перевернуты (точно так же, как в названии этого ката).
 * Передаваемые строки будут состоять только из букв и пробелов.
 * Пробелы будут включены только в том случае, если присутствует более одного слова.
 *
 * Examples:
 * "Hey fellow warriors"  --> "Hey wollef sroirraw"
 * "This is a test        --> "This is a test"
 * "This is another test" --> "This is rehtona test"
 */

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => (word.length >= 5 ? [...word].reverse().join("") : word))
    .join(" ");
}
