/**
 * Строка заканчивается на?
 *
 * Завершите решение так, чтобы оно возвращало значение true,
 * если первый переданный аргумент (строка) заканчивается 2-м аргументом
 * (также строкой).
 */

function solution(str, ending) {
  return str.endsWith(ending);
}

// function solution(str, ending) {
//   const pattern = new RegExp(`${ending}$`);

//   return pattern.test(str);
// }
