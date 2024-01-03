function modern(input) {
    /*
    The input will be a single string.
    Find all special words starting with #. If the found special word does not consist only of letters,
     then it is invalid and should not be printed. 
    Finally, print out all the special words you found without the label (#) on a new line.
     */
    let words = input.split(" ");//превръщаме входа в масив като го разделяме по интервал
    for (let word of words) {//превъртаме думите от него през цикъл
        if (word.startsWith('#') && word.length > 1) {//ако има дума която е по дълга от един символ
            //и започва с хаштаг 
            asciiCode = word.charCodeAt(1);//проверяваме останалите символи 
            let isLetter =//правим променлива която да провери дали думата съдържа само малки или
            // големи букви
                (asciiCode >= 65 && asciiCode <= 90) ||
                (asciiCode >= 97 && asciiCode <= 122);
            if (isLetter) {//и ако да 
                console.log(word.substring(1));//печатаме без първия символ като използвеаме събстринг

            }
        }
    }
}

modern(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
)