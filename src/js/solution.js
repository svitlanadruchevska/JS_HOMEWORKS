'use strict';

const ulElement = document.getElementById('ulId');

for (const liElement of ulElement.childNodes) {
  if (liElement.nodeType === 1) {
    console.log(liElement);
  }
}

const ulAttrNames = [];
const ulAttrValues = [];
for (const ulAttr of ulElement.attributes) {
  ulAttrNames.push(ulAttr.name);
  ulAttrValues.push(ulAttr.value);
}
console.log(ulAttrNames);
console.log(ulAttrValues);

const lastLiElement = ulElement.lastElementChild;
lastLiElement.textContent = 'Привіт, мене звуть Світлана';
const firstLiElement = ulElement.firstElementChild;
const myName = 'Світлана';
firstLiElement.setAttribute('data-my-name', myName);
ulElement.removeAttribute('data-dog-tail');
