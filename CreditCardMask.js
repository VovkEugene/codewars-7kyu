/**
 * Маска для кредитной карты
 *
 * Обычно, когда вы что-то покупаете, вас спрашивают,
 * верны ли номер вашей кредитной карты, номер телефона
 * или ответ на ваш самый секретный вопрос.
 * Однако, поскольку кто-то может заглянуть вам через плечо,
 * вы не хотите, чтобы это отображалось на вашем экране.
 * Вместо этого мы маскируем это.
 *
 * Ваша задача состоит в том, чтобы написать функцию maskify,
 * которая изменяет все символы, кроме последних четырех, на '#'.
 */

function maskify(cc) {
  const array = [...cc];
  const lengthReplace = cc.length - 4;

  for (let i = 0; i < lengthReplace; i++) {
    array[i] = "#";
  }

  return array.join("");
}

console.log(maskify("4556364607935616"));
