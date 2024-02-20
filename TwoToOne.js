/**
 * Два к одному
 *
 * Возьмем 2 строки s1 и s2, содержащие только буквы от a до z.
 * Вернем новую отсортированную строку, максимально длинную,
 * содержащую отдельные буквы - каждая из которых берется только один раз -
 * из s1 или s2.
 */

function longest(s1, s2) {
  const str = s1.concat(s2);
  const set = new Set(str);

  return [...set].sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
