/**
 * Подсчитайте количество дубликатов
 *
 * Напишите функцию, которая будет возвращать количество различных буквенных символов
 * без учета регистра и цифровых разрядов,
 * которые встречаются более одного раза во входной строке.
 * Можно предположить, что входная строка содержит только алфавиты
 * (как прописные, так и строчные) и цифровые цифры.
 *
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text) {
  text = text.toLowerCase();

  const obj = {};

  for (let word of text) {
    if (!obj.hasOwnProperty(word)) {
      obj[word] = 0;
    } else {
      obj[word]++;
    }
  }

  return Object
            .keys(obj)
            .filter((item) => obj[item] > 0)
            .length;
}
