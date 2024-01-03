function solve(arr) {
    /*Write a function that finds the longest sequence of equal elements in an array of numbers. 
    If several longest sequences exist, print the leftmost one.*/
    let newArr = [];//създаваме масив в който ще съхраняваме най=дългата поредица от числа
    let firstArr = [];//създаваме масив ,който да запазва временно най-дългата поредица
    //от числа докато не се появи нова.
    for (let index = 0; index < arr.length; index++) {//правим цикъл който да обхожда масива
        firstArr = [];//оставаме този масив празен за да може  при нужда да се изтрива поредица 
        //ако сме намерили по-голяма 
        for (let j = index; j < arr.length; j++) {//правим цикъл който да върти елементите от 
            //текущия индекс 
            if (arr[index] == arr[j]) {//ако елемента от горния цикъл е равен на елемента от вътршния
                firstArr.push(arr[index]);//добави елемнта от външния цикъл в масива
            } else {
                break;//ако не е прекъсни и започни от начало като изпразниш масива за поредици
            }

        }
        if (firstArr.length > newArr.length) {//ако дължината на масива за поредици е по-голяма от 
            // дължината на масива за краен резултат (ако и двата са празни например)
            newArr = firstArr;//то масива за краен резултат да придобие стойността на 
            //масива за временни поредици
        }

    }
    console.log(newArr.join(" "));// след извъртане на цикъла сме намерили най дългата последователност
    //и печатаме
}
solve(([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]))


/*function maxSeq(arr) {


    let longestSequence = [];//създаваме масив за крайния резултат
    //let leftMostIndex = 0;


    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];//създаваме променлива която да съхранява текущия елемент
        let currentSequence = [currentEl];//създаваме масив който да държи текущия елемент


        for (let j = i + 1; j < arr.length; j++) {//правим цикъл който да върти от следващия елемент
            //от главния масив
            let nextEl = arr[j];//създаваме променлива която да държи текущия елемент от този 
            //цикъл

            if (nextEl === currentEl) {//правим усл.конструкция в която казваме 
                //ако елемента от вложения  цикъл е равен на елемента от главния
                //цикъл 
                currentSequence.push(nextEl)//нека в масива за съвпадения да подадем елемента от вложения 
                //цикъл
            } else {
                break;//иначе прекъсваме цикъла и завъртаме отново
            }

        }

        if (currentSequence.length > longestSequence.length) {//създаваме условие в главния цикъл 
            //в който казваме ако дължината на текущия цикъл за съвпадения е по голяма 
            //от дължината на празния масив за най-дълго съвпадение 
            longestSequence = [];//казваме ,че е празен
            for (let j = 0; j < currentSequence.length; j++) {//и създаваме цикъл който да върти 
                //елементите от цикъла за съвпадения 
                longestSequence.push(currentSequence[j]);//и добавяме елементите от него в празния масив
            }
            // } else if (currentSequence.length === longestSequence.length) {
            //  if (i < leftMostIndex) {
            //    leftMostIndex = i;
            // }
        }

    }
    console.log(longestSequence.join(' '));
}


maxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])
maxSeq([1, 1, 1, 2, 3, 1, 3, 3])
maxSeq([4, 4, 4, 4])*/