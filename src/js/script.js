'use strict';

function padString(str, length, symb = '', addSymb = false) {
    if (typeof str !== 'string' || typeof length !== 'number' || typeof symb !== 'string' || typeof addSymb !== 'boolean') {
        return 'Помилка: невірні типи аргументів';
    }
    if (length <= str.length) {
        return str.substring(0, length);
    }
    const padSymb = length - str.length;
    const padd = symb.substring(padSymb);
    return  addSymb ? padd + str : str + padd;
}

console.log(padString('привіт', 3));
console.log(padString('привіт', 8, ''));
console.log(padString('привіт', 6, '*', false));
