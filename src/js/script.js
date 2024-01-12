'use strict';

function padString(str, length, symb = '', addSymb = false) {
    if (typeof str !== 'string' || typeof length !== 'number' || typeof symb !== 'string' || typeof addSymb !== 'boolean') {
        return 'Помилка: невірні типи аргументів';
    }
    if (length <= str.length) {
        return str.substring(0, length);
    }
    const padSymb = symb.repeat(length - str.length);
    return  addSymb ? padSymb + str : str + padSymb;
}

console.log(padString('привіт', 2));
console.log(padString('привіт', 8));
console.log(padString('привіт', 6, '*', false));
console.log(padString('привіт', 10, '-', true));