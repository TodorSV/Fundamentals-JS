let numbers = [1, 2, 3, 4, 5];

let integers = numbers.slice(0, 3);//(0=индекса от където започва,3=индекса докъдето ще се изреже масива)
console.log(numbers);//оригиналния масив се запазва и може да използваме модифицирания
console.log(integers);
let int=numbers.slice(-2);//(-2=изрязва последните два елемента от масива)
console.log(int);
let digits=numbers.slice(2);//когато зададем само един параметър казваме колко елемнта от масива
//да се отрежат от началото на масива (или от кой елемент да ни върне масива[3, 4, 5])
console.log(digits);