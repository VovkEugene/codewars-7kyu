/**
 * Преобразовать строку в регистр camel
 *
 * Завершите функцию так, чтобы она преобразовала слова,
 * разделенные тире / подчеркиванием, в регистр camel.
 *
 * Первое слово в выходных данных должно быть заглавным,
 * только если исходное слово было заглавным.
 * Следующие слова всегда должны быть написаны с заглавной буквы.
 *
 * Examples
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 * "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {
  const pattern = /[-_][a-zA-Z]/g;

  return str.replace(pattern, (char) => char.charAt(1).toUpperCase());
}
