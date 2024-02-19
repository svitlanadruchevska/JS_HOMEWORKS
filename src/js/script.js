'use strict';

const products = {
  item1: {
    name: 'Картопля',
    price: 100
  },
  item2: {
    name: 'Помідор',
    price: 200
  },
  item3: {
    name: 'Огірок',
    price: 300
  }
};
const discount = (products) => {
  return Object.keys(products).reduce((acc, key) => {
    acc[key] = {
      ...products[key],
      price: products[key].price * 0.9
    };
    return acc;
  }, {});
};

console.log(discount(products));

const students = [
  {
    name: 'Анна',
    rating: 89
  },
  {
    name: 'Іван',
    rating: 95
  },
  {
    name: 'Марія',
    rating: 100
  }
];

const topStudents = students.filter(student => student.rating > 90);

console.log(topStudents);
