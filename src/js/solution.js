'use strict';

const ulElement = document.getElementById('ulId');

for (const liElement of ulElement.childNodes) {
  if (liElement.nodeType === 1) {
    console.log(liElement);
  }
}

console.log(ulElement.getElementsByTagName('li').length);

const liTextArr = Array.from(ulElement.getElementsByTagName('li'),
  li => li.textContent);
console.log(liTextArr);
