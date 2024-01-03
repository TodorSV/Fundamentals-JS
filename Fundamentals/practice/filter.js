let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let even = numbers.filter(isEven);

function isEven(value) {
  return value % 2 === 0;
}
console.log(even);

let people = [
  {
    name: "Misho",
    age: 37,
  },
  {
    name: "Nati",
    age: 36,
  },
  {
    name: "Sashi",
    age: 10,
  },
];
let adults = people.filter((person) => person.age >= 18);
console.log(adults);
