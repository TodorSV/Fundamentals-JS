function commonEl(arr1, arr2) {
    /*Write a function, which prints common elements in two string arrays. 
    Print all matches on separate lines. Compare the first array with the second array.*/

    let result1;//създаваме променливи ,които да съхраняват временни резултати 
    let result2;//от обхождане на двата масива ,които са ни дадени


    for (let i = 0; i < arr1.length; i++) {//цикъл който да обхожда първия масив
        result1 = arr1[i];//пълним променливата с елемента който идва от завъртането
        for (let j = 0; j < arr2.length; j++) {//цикъл който да обхожда 2рият масив
            result2 = arr2[j];//пълним променливата с елемента който идва от завъртането

            if (result1 === result2) {//ако резултата от едната променлива е равна по тип и стойност 
                //на резултата във  втората променлива 
                console.log(result1)//печатаме първата 
            } else if (result2 === result1) {// а ако е обратното печатаме втората
                console.log(result2);
            }

        }

    }
}
commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)