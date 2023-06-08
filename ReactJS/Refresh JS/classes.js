// // V-1
// class Human {
//   constructor() {
//     this.gender = "male";
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super();
//     this.name = "Max";
//   }

//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// V-2
class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  printMyName = () => {
    console.log(this.name);
  };
}

const person2 = new Person();
person2.printMyName();
person2.printGender();
