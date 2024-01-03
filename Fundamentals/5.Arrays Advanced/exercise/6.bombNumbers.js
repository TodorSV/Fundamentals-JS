function bombNum(boomArea, radius) {
    /*
* Write a function that receives two parameters: sequence of numbers and special bomb number
* with a certain power. 
* Your task is to detonate every occurrence of the special bomb number
* and according to its power his neighbors from left and right.
* Detonations are performed from left to right and all detonated numbers disappear. 
* The input contains two arrays of numbers. 
* The first contains the initial sequence and the second contains the special bomb number and its power.
* The output is the sum of the remaining elements in the sequence.
    */

    let specialNum = radius[0];//Взимаме числото,което детонира бомбата от масива за число и радиус 
    let area = radius[1];//Взимаме числото ,което определя радиуса на бомбата (то заобикаля 
    //числото детонатор от ляво и от дясно)
    let indexOfBomb = boomArea.indexOf(specialNum);//определяме къде в масива се намира детонатора
    while (indexOfBomb !== -1) {//докато има детонатор в масива
        let startExplosion = Math.max(0, indexOfBomb - area);//началото се определя от началото на масива 
        //до числото детонатор минус числото за радиус
        let explosionLenght = area * 2 + 1//умножаваме радиуса *2+1 за да може да се изтрият поредиците
        //с число за радиус + детонатора
        boomArea.splice(startExplosion, explosionLenght)//след което ги изтриваме от масива 
        // console.log(boomArea);
        indexOfBomb = boomArea.indexOf(specialNum)//казваме ,че детонатора е равен на числото за 
        //детонатор е равен на числото за детонатор в масива ,ако не етам цикъла свършва


    }
    let sum = 0
    for (let num of boomArea) {//правиме цикъл за да вземем останалите числа от масива и да ги съберем
        let curr = num
        sum += curr
    }
    console.log(sum);//печатаме 
}

//console.log(specialNum, area);

//bombNum([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])
bombNum([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])