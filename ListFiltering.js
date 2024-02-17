/**
 * Фильтрация списка
 * В этом ката вы создадите функцию,
 * которая принимает список неотрицательных целых чисел и строк
 * и возвращает новый список с отфильтрованными строками.
 *
 * Example
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

function filter_list(list) {
  const pattern = /\d/;

  return list.filter((item) => typeof item == "number" && pattern.test(item));
}
