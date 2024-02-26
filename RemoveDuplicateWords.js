/**
 * Удалите повторяющиеся слова
 *
 * Ваша задача состоит в том, чтобы удалить все повторяющиеся слова из строки,
 * оставив только записи с одиночными (первыми) словами.
 *
 * Input:
 * 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 *
 * Output:
 * 'alpha beta gamma delta'
 */

function removeDuplicateWords(s) {
  return Array.from(new Set(s.split(" "))).join(" ");
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
