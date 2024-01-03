function sumEvenNumbers(arr) {
    // Write a program, which receives an array of strings, parse them into numbers,
    // and sum only the even numbers

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        let digits = Number(arr[i]);
        if (digits % 2 == 0) {
            result += digits
        }

    }
    console.log(result);

}
sumEvenNumbers(['1', '2', '3', '4', '5', '6'])