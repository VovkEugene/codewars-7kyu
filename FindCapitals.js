/**
 * Найдите заглавные буквы
 *
 * Напишите функцию, которая принимает в качестве аргумента единственную
 * непустую строку, состоящую только из строчных и прописных букв ascii (word),
 * и возвращает упорядоченный список, содержащий индексы
 * всех заглавных (прописных) букв в строке.
 *
 * Example (Input --> Output)
 * "CodEWaRs" --> [0,3,4,6]
 */

var capitals = function (word) {
  const array = [];
  const wordLength = word.length;

  for (let i = 0; i < wordLength; i++) {
    if (word[i] == word[i].toUpperCase()) {
      array.push(i);
    }
  }

  return array;
};
