'use strict';

//task1

console.log('task1');

const student =  {
    name: 'Ann',
    age: 25,
    grade: 95,
};

console.log(student);

student.grade = 100;

console.log(student);

student.course = 'second';

console.log(student);

//task2

console.log('task2');

 const book = {
     title: 'The Old Man and the Sea',
     author: 'Ernest Hemingway',
     year: 1952,
     publisher: {
         name: 'Charles Scribner\'s Sons',
         location: 'Bimini (Bahamas)',
     }
};

 console.log(book);

//task3

console.log('task3');

const movie = {
    title: 'Wonka',
    director: 'Paul King',
    year: 2023,
    genre: 'musical fantasy film',
};

for (const prop in movie) {
    console.log('movie ' + prop + ' = ' + movie[prop])
}

//task4

console.log('task4');

const person1 = {
    name: 'Mary',
    age: 32,
};

const person2 = {
    name: 'Mary',
    age: 32,
};

console.log(person1===person2);

if (JSON.stringify(person1) === JSON.stringify(person2))
console.log(true);
 else
     console.log(false);


//task5

console.log('task5');

const arrAnimals = [
    {
        name: 'Fox',
        type: 'Mammalia',
    },
    {
        name: 'Frog',
        type: 'Amphibia',
    },
    {
        name: 'Crocodile',
        type: 'Reptilia',
    },
    {
        name: 'Parrot',
        type: 'Birds',
    },
];

console.log(arrAnimals);

arrAnimals[4] = {
    name: 'Lemur',
    type: 'Mammalia',
};

console.log(arrAnimals);



