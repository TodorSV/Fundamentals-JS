function magicN(arr, magic) {
    /* Write a function, which prints all unique pairs in an array 
    of integers whose sum is equal to a given number. */
    for (let i = 0; i < arr.length/*(-1)*/; i++) {//правиме цикъл който обхожда масива  
        let currEl = arr[i];//запазваме стойността от елемента който обхождаме
        for (let j = i + 1; j < arr.length; j++) {//правим цикъл който върти от следващия 
            //елемент в масива
            let nextel = arr[j];//запазваме моментната стойност
            let sum = currEl + nextel;//събираме двата елемента
            if (sum === magic) {//и казваме така : ако сборът от двата елемента е равен на 
                //магическото число ,което ни е дадено 
                console.log(`${currEl} ${nextel}`);//принтираме с интервал числата от ,които 
                //се е получил сборът
            }

        }
    }

}
magicN([1, 7, 6, 2, 19, 23],
    8
)