//!filter() – creates a new array from elements matching predicate
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);//правим нов масив в който казваме,че всеки елемент
// от оригиналния масив с дължина по голяма от 3 символа влиза в новия масив(longWords)

console.log(longWords); // ['three','four']

let nums = [5, -11, 3, -2, 8]
let positiveNums = nums.filter(x => x > 0);//нека всеки елемент от оригиналния масив(nums) който е 
//положително число да влезне в (positiveNums)
console.log(positiveNums); // [5, 3, 8]
