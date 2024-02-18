/**
 * Получите средний символ
 *
 * Вам будет дано слово.
 * Ваша задача - вернуть средний символ слова.
 * Если длина слова нечетная, верните средний символ.
 * Если длина слова четная, верните 2 средних символа.
 */

function getMiddle(word) {
  const wordLength = word.length;
  const halfWord = wordLength / 2;

  if (wordLength % 2 == 0) {
    return word.slice(halfWord - 1, halfWord + 1);
  } else {
    return word.charAt(halfWord);
  }
}
