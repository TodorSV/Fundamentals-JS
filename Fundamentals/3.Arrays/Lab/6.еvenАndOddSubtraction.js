function evenAndOddSubtraction(arr) {
    //Write a program that calculates the difference 
    //between the sum of the even and the sum of the odd numbers in an array.
    let evenResult = 0;
    let OddResult = 0;


    for (let i = 0; i < arr.length; i++) {

        let digit = Number(arr[i]);

        if (digit % 2 == 0) {
            evenResult += digit;

        } else {
            OddResult += digit;
        }
    }
    let sum = evenResult - OddResult;
    console.log(sum);
}
//evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9])