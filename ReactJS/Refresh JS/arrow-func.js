// Oldstyle
function printMyName(name) {
  console.log(name);
}

printMyName("Raghim");

// New style
const myFunc = (name) => {
  console.log(name);
};

myFunc("Raghim");

const multiply = (number) => {
  return number * 2;
};
console.log(multiply(4));

///same shit

const multiplyFloat = (number) => number * 4;

console.log(multiplyFloat(3.14));
