/**
 * Удалить привязку из URL-адреса
 *
 * Завершите функцию так, чтобы он возвращал URL-адрес с чем угодно
 * после удаления привязки (#).
 *
 * Examples
 * "www.codewars.com#about" --> "www.codewars.com"
 * "www.codewars.com?page=1" -->"www.codewars.com?page=1"
 */

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
console.log(removeUrlAnchor('www.codewars.com/katas/'));
console.log(removeUrlAnchor('www.codewars.com?page=1'));
