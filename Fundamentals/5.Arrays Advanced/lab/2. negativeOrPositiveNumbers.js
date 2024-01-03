function negativeOrPositiveNumbers(array) {
    /*
    *Write a function that processes the elements in an array one by one and produces a new array. 
    *Prepend each negative element at the front of the array (as the first element)
    * and append each positive (or 0) element at the end of the array.
    *The input comes as an array of string elements holding numbers.
    *The output is printed on the console, each element on a new line.
    */

    let digits = []
    for (let i = 0; i < array.length; i++) {
        let curr = Number(array[i]);
        if (curr < 0) {
            digits.unshift(curr);
        } else {
            digits.push(curr);
        }

    }
    console.log(digits.join(`\n`));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])