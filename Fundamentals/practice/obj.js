///let person = { name: 'Peter', age: 20, height: 183 };

let person = {};
person.name = "Peter";
person.age = 20;
person.hairColor = "black";
person.middleName = "Jacobs"; //единият начин за създаване на properties
person["lastName"] /*това е другият начин за създаване на property*/ = "Parker";
console.log(person.name, person.middleName, person.lastName);

//let person = { name: 'Peter', age: 20 };
person.sayHello = () => console.log("Hi, guys"); //функциите се наричат методи
person.sayHello();

//Object.keys()
//Object.values()
//Object.entries()

let obj = { name: "Peter", age: "18", grade: "5.50" };
for (let key of Object.keys(obj)) {
  console.log(`${key}: ${obj[key]}`);
}

function objConverter(json) {
  let person = JSON.parse(json);

  let entries = Object.entries(person);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says Woof!`);
  }
}
let dog = new Dog("Sparky");
dog.speak();
