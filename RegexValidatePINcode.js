/**
 * Регулярное выражение проверяет PIN-код
 *
 * Банкоматы допускают 4- или 6-значные PIN-коды,
 * а PIN-коды не могут содержать ничего, кроме ровно 4 цифр или ровно 6 цифр.
 *
 * Если функции передана действительная строка PIN-кода,
 * верните true, в противном случае верните false.
 */

function validatePIN(pin) {
  const pattern = /^([0-9]{4}|[0-9]{6})$/g;

  return pattern.test(pin);
}
