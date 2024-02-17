/**
 * Количество гласных
 * 
 * Верните количество гласных в данной строке.
 * Мы будем рассматривать 'a, e, i, o,'
 * u в качестве гласных для этого ката (но не 'y').
 */

function getCount(str) {
  const pattern = /[aeiou]/gi;

  if (str && pattern.test(str)) {
    return str.match(pattern).length;
  }

  return 0;
}
