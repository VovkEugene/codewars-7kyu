/**
 * Разделенные строки
 *
 * Завершите решение так, чтобы оно разбило строку на пары по два символа.
 * Если строка содержит нечетное количество символов,
 * то следует заменить пропущенный второй символ последней пары
 * символом подчеркивания ('_').
 *
 * Examples:
 *  'abc' =>  ['ab', 'c_']
 *  'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str) {
  const strLength = str.length;
  const result = [];

  if (strLength % 2 != 0) {
    str += "_";
  }

  for (let i = 1; i <= strLength; i += 2) {
    result.push(str[i - 1] + str[i]);
  }

  return result;
}

// best solution
function solution(str) {
  return (str + "_").match(/.{2}/g) || [];
}
