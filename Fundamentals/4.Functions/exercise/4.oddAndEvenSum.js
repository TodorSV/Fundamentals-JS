function oddAndEvenSum(num) {
    /*You will receive a single number. You have to write a function,
     that returns the sum of all even and all odd digits from that number.  */
    num = num.toString()
    let evenIntSum = 0
    let oddInt = 0
    for (let i = 0; i < num.length; i++) {
        let curr = Number(num[i]);
        if (curr % 2 == 0) {
            evenIntSum += curr;

        } else {
            oddInt += curr
        }
    }
    console.log(`Odd sum = ${oddInt}, Even sum = ${evenIntSum}`);

}
oddAndEvenSum(1000435)