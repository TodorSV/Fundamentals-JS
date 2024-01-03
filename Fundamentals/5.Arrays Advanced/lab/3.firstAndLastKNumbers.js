function firstAndLastKNumbers(arr) {
    /* 
    *Write a function that prints the first k and the last k elements from an array of numbers.
    
    *The input comes as an array of number elements. The first element represents the number k,
    * all other elements are from the array that needs to be processed.
    
    *The output is printed on the console on two lines. On the first line, print the first k elements,
    * separated by space. On the second line, print the last k elements, separated by space.
    */
    let k = arr.shift();//изтегляме първия елемент от масива 
    console.log(arr.slice(0, k).join(' '));//и след това му казваме от къде до къде да го изрежем,
    //и как да го принтираме
    console.log(arr.slice(arr.length - k, arr.length).join(' '));
}


firstAndLastKNumbers([2,
    7, 8, 9]
)