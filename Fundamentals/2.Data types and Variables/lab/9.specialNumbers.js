function special(arg) {
    let num = arg;

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let digits = i;
        while (digits > 0) {
            sum += digits % 10;;
            digits = parseInt(digits / 10);
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

special(15)