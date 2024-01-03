
function latin(n) {
    //създаваме три вложени всеки от тях му казваме да се върти от 0 до n

    for (let i = 0; i < n; i++) {
        let firstLetter = String.fromCharCode(i + 97);//sfromCharCode(i+97) превръщаме стринговото число в буква
        for (let j = 0; j < n; j++) {
            let secondLetter = String.fromCharCode(j + 97);//sfromCharCode(j+97) превръщаме стринговото число в буква
            for (let k = 0; k < n; k++) {
                let thirdLetter = String.fromCharCode(k + 97);//sfromCharCode(k+97) превръщаме стринговото число в буква
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);//във най вътрешния цикъл искаме конзолата 
                //да ни изпечата всички възмобюжни комбинации
            }
        }
    }
}
//създаваме три вложени всеки от тях му казваме да се върти от 0 до n


latin('3')