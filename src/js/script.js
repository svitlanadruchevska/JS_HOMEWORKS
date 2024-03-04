'use strict';
const generateList = function generateList (arr) {
  const ul = document.createElement('ul');
  arr.forEach(item => {
    const li = document.createElement('li');
    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      li.textContent = item;
    }
    ul.appendChild(li);
  });
  return ul;
};

const arr = [1, 2, [1.1, 1.2, 1.3], 3, 4, 5];
const list = generateList(arr);
document.body.appendChild(list);
