/**
 * У мистера Скруджа есть сумма денег "P", которую он хочет инвестировать.
 * Прежде чем он это сделает, он хочет знать, сколько лет "Y" эта сумма "P"
 * должна храниться в банке, чтобы она составила желаемую сумму денег "D".
 *
 * Сумма хранится в течение "Y" лет в банке, где проценты "I" выплачиваются ежегодно.
 * После уплаты налогов "T" за год новая сумма повторно инвестируется.
 *
 * Примечание по налогообложению: налогом облагается не основная сумма
 * инвестированного капитала, а только начисленные проценты за год
 *
 * Example:
 *   Let P be the Principal = 1000.00
 *   Let I be the Interest Rate = 0.05
 *   Let T be the Tax Rate = 0.18
 *   Let D be the Desired Sum = 1100.00
 *
 * After 1st Year -->
 *   P = 1041.00
 * After 2nd Year -->
 *   P = 1083.86
 * After 3rd Year -->
 *   P = 1128.30
 *
 *
 * Таким образом, мистеру Скруджу приходится ждать 3 года,
 * пока первоначальный взнос составит желаемую сумму.
 *
 * Ваша задача - выполнить предложенный метод и вернуть количество лет "Y" в целом,
 * чтобы мистер Скрудж получил желаемую сумму.
 *
 * Допущение: Предположим, что желаемый основной долг "D" всегда больше
 * первоначального основного долга.
 * Однако лучше всего принять во внимание, что если желаемый основной долг "D"
 * равен основному долгу "P", это должно вернуть 0 лет.
 */

function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    principal += (principal * interest) - (principal * interest) * tax;
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
