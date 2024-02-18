/**
 * Обсадные колонны из Джейдена
 *
 * Джейден Смит, сын Уилла Смита, является звездой таких фильмов,
 * как "Малыш-каратист" (2010) и "После земли" (2013).
 * Джейден также известен своей философией, которую он излагает через Twitter.
 * Когда он пишет в Twitter, он известен тем, что почти всегда
 * пишет каждое слово с заглавной буквы.
 * Для простоты вам придется писать каждое слово с заглавной буквы,
 * посмотрите, какими должны быть сокращения в примере ниже.
 *
 * Ваша задача - преобразовать строки в то, как они были бы написаны Джейденом Смитом.
 * Строки представляют собой настоящие цитаты Джейдена Смита,
 * но они написаны не с заглавной буквы тем же способом,
 * которым он изначально их вводил.
 *
 * Example:
 * Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 * Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 */

String.prototype.toJadenCase = function () {
  const pattern = /^[a-z]/gi;
  const words = this.split(" ");

  return words
    .map((word) => word.replace(pattern, (char) => char.toUpperCase()))
    .join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());
