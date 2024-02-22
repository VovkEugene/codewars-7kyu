/**
 * Лишайте троллей права голоса
 *
 * Тролли атакуют ваш раздел комментариев!
 *
 * Распространенный способ справиться с этой ситуацией
 * - удалить все гласные из комментариев троллей, нейтрализовав угрозу.
 *
 * Ваша задача - написать функцию, которая принимает строку
 * и возвращает новую строку с удаленными гласными.
 *
 * Например, строка "This website is for losers LOL!"
 * превратилась бы в "Ths wbst s fr lsrs LL!".
 *
 * Примечание: в этом ката 'y' не считается гласной.
 */

function disemvowel(str) {
  const pattern = /[aeiou]/gi;

  return str.replace(pattern, "");
}