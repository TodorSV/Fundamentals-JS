function distinctArray(num) {

    for (let index = 0; index < num.length; index++) {
        let currInt = num[index];
        for (let i = index + 1; i < num.length; i++) {
            let checked = num[i];
            if (checked === currInt) {
                num.splice(i, 1)
                i = i - 1

            }
        }
    }
    console.log(num.join(' '));
}
//distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([1, 2, 3, 4])