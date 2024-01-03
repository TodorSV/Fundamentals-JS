/*function mathPow(num, pow) {
    /* Write a function that calculates and print the value of a number raised to a given power:*/
/*let result = Math.pow(num, pow);

console.log(result);

} */

function mathPow(num, pow) {
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= num
    }
    console.log(result);
}
mathPow(3, 4)
