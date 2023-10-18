import Validator from '../regexpNicknames';

test.each([
  ['-Maxim', false], // начинается на -
  ['0Maxim', false], // начинается на цифру
  ['Maxim0', false], // заканчивается на цифру
  ['_Maxim', false], // начинается на _
  ['Maxim_', false], // заканчивается на _
  ['Максим', false], // не латинские символы
  ['Maxim-_0-9-', false], // заканчивается на - 
  ['Ma%im', false], // используется %
  ['Maxim!', false], // используется !
  ['Maxim9_9-9Maxim', true],
  ['Maxim999Maxim', true],
  ['Maxim9999Maxim', false], // четыре цифры подряд
  ['Maxim-99_Max-C', true],
])('testing nicknames', (name, expected) => {
  const validator = new Validator(name);
  const result = validator.validateUsername();
  expect(result).toBe(expected);
});
