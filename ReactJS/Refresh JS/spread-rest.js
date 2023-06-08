// Spread and rest operators

//Spread
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6, 7];

console.log(newNumbers);

//rest
const person = {
  name: "Raghim",
};

const newPerson = {
  ...person,
  age: 21,
};

console.log(newPerson);

const filter = (...args) => args.filter((el) => el === 1);

console.log(filter(1, 2, 3));
