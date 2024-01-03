function is_perfect(number) {

    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {//правим цикъл който да върти по дължината на числото
        //разделена на 2

        if (number % i === 0) {//ако числото разделено на индескса е = на 0 
            temp += i;//добави числото в променливата и ги събери с индекса  
        }
    }

    if (temp === number && temp !== 0) {//ако променливата  е равна на числото и е различна от 0 
        //имаме перфектното число

        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}
is_perfect(6); 