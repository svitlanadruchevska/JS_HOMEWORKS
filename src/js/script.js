'use strict';

function potatosForBorsch(potatoWeigth, potatoQuantity, potatoPrice, borschQuantity) {
    const potatoCost = (potatoWeigth * potatoQuantity) / 1000 * potatoPrice;
    return Math.round(potatoCost * borschQuantity);
}

console.log('Вартість картоплі для приготування 48л борщу : ' + potatosForBorsch(75, 4, 13, 48) + 'грн');