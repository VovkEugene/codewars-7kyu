/**
 * Последовательность Трибоначчи
 *
 * Хорошо знаком со старшим братом Фибоначчи, он же Трибоначчи.
 *
 * Как уже видно из названия, он работает в основном как Фибоначчи,
 * но суммирует последние 3 (вместо 2) числа
 * последовательности для генерации следующего.
 * И, что еще хуже, к сожалению, я не услышу, как неродные
 * носители итальянского пытаются произнести это:(
 *
 *
 * Итак, если мы хотим начать нашу последовательность Трибоначчи с [1, 1, 1]
 * в качестве начального ввода (он же подпись), у нас есть эта последовательность:
 * [1, 1 ,1, 3, 5, 9, 17, 31, ...]
 *
 * Но что, если мы начнем с [0, 0, 1] в качестве подписи?
 * Поскольку начало с [0, 1] вместо [1, 1] в основном сдвигает
 * общую последовательность Фибоначчи на одно место,
 * у вас может возникнуть соблазн подумать, что мы получим ту же последовательность,
 * сдвинутую на 2 места, но это не так, и мы получим:
 * [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
 *
 * Что ж, возможно, вы уже догадались об этом, но для ясности:
 * вам нужно создать функцию Фибоначчи, которая, учитывая массив сигнатур / список,
 * возвращает первые n элементов, включая сигнатуры, из заданной последовательности.
 *
 * Подпись всегда будет содержать 3 числа; n всегда будет неотрицательным числом;
 * если n == 0, то верните пустой массив
 * (за исключением случаев, когда C возвращает NULL)
 * и будьте готовы ко всему остальному, что явно не указано ;)
 */

function tribonacci(signature, n) {
  switch (n) {
    case 0:
      return [];
    case 1:
      return [signature[0]];
    case 2:
      return [signature[0], signature[1]];
    case 3:
      return [signature[0], signature[1], signature[2]];
  }

  for (let i = 2; i < n - 1; i++) {
    signature.push(signature[i] + signature[i - 1] + signature[i - 2]);
  }

  return signature;
}