function spice(yield) {
    let colected = 0;
    let days = 0;
    while (yield >= 100) {
        days++
        colected += yield - 26;
        yield -= 10

    }
    console.log(days);
    if (days != 0) {
        console.log(colected - 26);
    } else {
        console.log(colected);
    }
}
spice(111)