function sumFirstLast(arr) {
    /*
    *Write a function that calculates and prints the sum of the first and the last elements in an array.
    *The input comes as an array of string elements holding numbers.
    *The output is printed on the console.
    */

    let mod = arr.map(Number);
    let sum = mod[0] + mod[arr.length - 1]
    console.log(sum);

}
sumFirstLast(['20', '30', '40'])