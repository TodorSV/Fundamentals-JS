function factorial(n1, n2) {
    let result = 1;
    let result1 = 1;
    for (let i = 1; i <= n1; i++) {
        result *= i;
    }
    for (let i = 1; i <= n2; i++) {
        result1 *= i;
    }
    let total = result / result1
    console.log(total.toFixed(2));
}
factorial(5,
    2
)