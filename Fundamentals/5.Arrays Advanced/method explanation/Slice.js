//*! Slice-дължината на оригиналния масив не се променя ,правим му копие с елементите ,кото ни трябват.
let myArray = ["one", "two", "three", "four", "five"];
let sliced = myArray.slice(-3);//може да зададем един параметър на функцията и по този начин
//казваме след кой елемент да се изреже масива
//console.log(myArray); //оригиналния масив не променя дължината си slice му прави копие
console.log(sliced); // ["three","four","five"]
//console.log(myArray.slice(2, 4)); // ["three","four"] когато зададем два параметъра на slice
// му казваме след кой елемент да изреже масива и до кой елемент да спре
