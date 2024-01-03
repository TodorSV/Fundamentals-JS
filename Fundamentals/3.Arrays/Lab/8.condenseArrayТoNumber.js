function condenseArrayToNumber(num) {
    /*Write a program, which receives an array of numbers, 
    and condenses them by summing adjacent couples of elements until a single number is obtained.
     For example, if we have 3 elements [2, 10, 3], we sum the first two and the second two elements
    and obtain {2+10, 10+3} = {12, 13},
     then we sum again all adjacent elements and obtain {12+13} = {25}.*/
    let condensed = [];//създаваме празен масив
    for (const i of num) {//създаваме цикъл който да обходи масива
        condensed.push(i);//пълним празния масив с елемнтите от дадения такъв
    }
    while (condensed.length > 1) {//създваме цикъл който да се изпълнява докато дължината на 
        //новия масив е по-голяма от 1
        let temp = [];//създаваме втори празен масив
        for (let i = 0; i < condensed.length - 1; i++) {//правиме цикъл с който обхождаме масива който
            //вече сме напълнили без последния му елемент
            temp.push(condensed[i] + condensed[i + 1]);//пълниме 2рия празен с елементитте от първия
            //като смятаме елемент +елемент+още един
        }
        condensed = temp//даваме обща стойност на сбора от елементите му 
    }
    console.log(condensed[0]);//пе1атаме стойността от нулевия елемент от масива .

}
//condenseArrayToNumber([2, 10, 3]);
//console.log("--------------");
condenseArrayToNumber([5, 0, 4, 1, 2]);
//console.log("--------------");
//condenseArrayToNumber([2, 10, 3]);