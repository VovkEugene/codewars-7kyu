/**
 * Создайте номер телефона
 *
 * Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9)
 * и возвращает строку из этих чисел в виде номера телефона.
 *
 * Example
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 *
 * Возвращаемый формат должен быть правильным, чтобы выполнить это задание.
 *
 * Не забудьте поставить пробел после закрывающих скобок!
 */

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// best solution
function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";
  const numbersLength = numbers.length;

  for (let i = 0; i < numbersLength; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
