'use strict';

const parseJSON = function (jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return 'Error! Invalid JSON string';
  }
};

// Приклад використання:
console.log(parseJSON('{"name": "John", "age": 30}'));
console.log(parseJSON('{"name": "John", "age":'));
