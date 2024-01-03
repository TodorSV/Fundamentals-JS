//*!Splice-модифицира масива ,след като веднъж сме го използвали оригиналния размер на масива се променя 
let nums = [5, 10, 15, 20, 25, 30];
let mid = nums.splice(, 3); //* започва от 2ри индекс и показва колко елемента да махне от масива(3)
//console.log(mid.join('|'));  // 15|20|25
console.log(nums.join('|')); // 5|10|30

//nums.splice(3, 2, "twenty", "twenty-five");
//console.log(nums.join('|')); // 5|10|15|twenty|twenty-five|30



