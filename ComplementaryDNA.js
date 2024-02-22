/**
 * Комплементарная ДНК
 *
 * Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество,
 * содержащееся в ядре клеток и несущее "инструкции" для развития
 * и функционирования живых организмов.
 *
 * В строках ДНК символы "A" и "T" дополняют друг друга, как "C" и "G".
 * Ваша функция получает одну сторону ДНК.
 * Вам нужно вернуть другую комплементарную сторону.
 *
 * Цепочка ДНК никогда не бывает пустой или ДНК вообще нет.
 */

function dnaStrand(dna) {
  const pattern1 = /[AT]/g;
  const pattern2 = /[CG]/g;

  dna = dna.replace(pattern1, (symbol) => (symbol == "A" ? "T" : "A"));

  return dna.replace(pattern2, (symbol) => (symbol == "C" ? "G" : "C"));
}
