function reverseInPlace(arr) {
    //Write a program, which receives an array of strings.
    // Your task is to reverse the array without creating a new array. 
    //Print the resulting elements on a single line, space-separated. 
    let newarr = "";
    let result;
    for (let i = arr.length - 1; i >= 0; i--) {
        newarr += arr[i];
        newarr += ' '


    }
    console.log(newarr);
}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
