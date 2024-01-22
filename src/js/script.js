'use strict'

const createUser = function (name, age) {
  const user = {
    name,
    age
  }
  user.greet = greet
  return user
}

const greet = function () {
  console.log(`Привіт, мене звати ${this.name}!`)
}

const user1 = createUser('Марія', 25)
const user2 = createUser('Роман', 30)

user1.greet()
user2.greet()
