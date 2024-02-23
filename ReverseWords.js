/**
 * Слова наоборот
 *
 * Завершите функцию, которая принимает строковый параметр,
 * и переверните каждое слово в строке.
 * Все пробелы в строке должны быть сохранены.
 *
 * Examples
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
}
