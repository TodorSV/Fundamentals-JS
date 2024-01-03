function lastKNumbersSequance(n, k) {
    /*
*You are given two integers n and k. Write a function that generates and prints the following sequence:
*The first element is 1.
*Every following element equals the sum of the previous k elements.
*The length of the sequence is n elements.
	
*The input comes as two number arguments. 
*The first element represents the number n, and the second – the number k.
*The output is printed on the console on a single line, separated by space.

    */
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current
        let previousK = seq.slice(start, end);
        let sum = 0
        for (let i = 0; i < previousK.length; i++) {
            sum += previousK[i];
        }
        seq[current] = sum;
    }
    console.log(seq.join(' '));
}
lastKNumbersSequance(6, 3)