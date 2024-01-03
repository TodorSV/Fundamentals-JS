function sorting(arr) {
    /* 
    *Write a function that sorts an array of numbers so that the first element is the biggest one,
    * the second is the smallest one, the third is the second biggest one,
    * and the fourth is the second smallest one, and so on. 
    *Print the elements on one row, separated by a single space.
    */
    let upDown = []

    arr.sort((a, b) => b - a)//обръщаме масива във низходящ ред
    while (arr.length > 0) {//правим цикъл който да върти докато не свърши масива
        let biggest = arr.shift()//взимаме най-голямото число
        upDown.push(biggest)//добавяме го в новия масив
        let smallest = arr.pop()//взимаме най-малкото число
        upDown.push(smallest)//добавяме го да най-голямото и цикъла се завърта отново
    }
    console.log(upDown.join(" "))//след като се извърти цикъла печатаме новия масив 
    //вече във вида който ни е по условие
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])