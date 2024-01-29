'use strict';
/* в цьому випадку хойстинг призведе до успішного виконання коду */
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 4));

/* в цьому випадку хойстинг призведе до помилки, тому що змінна не може бути використана до того як вона визначена */
console.log(sum(2, 4));
const sum = function (a, b) {
  return a + b;
};
