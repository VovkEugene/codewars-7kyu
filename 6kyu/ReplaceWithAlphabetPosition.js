/**
 * Заменить на Позицию алфавита
 *
 * В этом ката от вас требуется, учитывая строку,
 * заменить каждую букву на ее позицию в алфавите.
 *
 * Если что-либо в тексте не является буквой, игнорируйте это и не возвращайте.
 * "a" = 1, "b" = 2, etc.
 *
 * Example
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return
 * "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 * ( as a string )
 */

function alphabetPosition(text) {
  text = text.toUpperCase();
  text = text.match(/[A-Za-z]/g);

  if (text == null) {
    return "";
  }

  const asciiCode = 64; // see ASCII-Table

  return text.map((char) => char.charCodeAt() - asciiCode).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
