function prime(n) {
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("true"); 
    } else {
        console.log("false");
    }
}
prime(6)