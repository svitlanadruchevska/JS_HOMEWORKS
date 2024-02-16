'use strict';

const cats = [
  {
    name: 'Marta',
    age: '10'
  },
  {
    name: 'Foxy',
    age: '5'
  },
  {
    name: 'Leo',
    age: '2'
  }
];

const dogs = [
  {
    name: 'Jack',
    age: '1'
  },
  {
    name: 'Patron',
    age: '6'
  },
  {
    name: 'Fill',
    age: '12'
  }
];

const pets = function () {
  return this.name + ' - ' + this.age + ' yr';
};

cats.forEach(function (cat) {
  console.log(pets.apply(cat));
});

dogs.forEach(function (dog) {
  console.log(pets.apply(dog));
});
