/**
 * Обнаружение анаграммы
 *
 * Анаграмма - это результат перестановки букв слова для получения нового слова.
 *
 * Примечание: анаграммы не чувствительны к регистру.
 *
 * Завершите функцию, чтобы вернуть значение true,
 * если два приведенных аргумента являются анаграммами друг друга;
 * в противном случае верните значение false.
 *
 * Examples
 * "foefet" is an anagram of "toffee"
 * "Buckethead" is an anagram of "DeathCubeK"
 */

function isAnagram(test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  return getSort(test) === getSort(original);
}

function getSort(str) {
  return [...str].sort((a, b) => b.localeCompare(a)).join("");
}
