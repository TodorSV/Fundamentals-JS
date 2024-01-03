function sumDigits(num) {
    let digitToString = num.toString();
    let sum = 0;


    for (const i of digitToString) { 
        sum += Number(i)
    }

}


sumDigits(245678)