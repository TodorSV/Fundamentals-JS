function addAndSub(array) {
    /*Write a function, which changes the value of odd and even numbers in an array of numbers. 
    •If the number is even - add to its value its index position
    •If the number is odd - subtract to its value its index position
    Output
    On the first line print the newly modified array,
     on the second line print the sum of numbers from the original array,
      on the third line print the sum of numbers from the modified array.
    */
    let moddArr = [];//създаваме масив в който ще държим новите стойности на елементите
    let sum = 0;//променлива която да държи сбора на елементите от първонаалния масив
    let sum2 = 0;//променлива която да държи сбора на елементите от променения масив
    for (let i = 0; i < array.length; i++) {//цикъл с който обхождаме масива
        let int = Number(array[i]);//взимаме елемент от масива 
        sum += int//и го добавяме в променливата за сбора от първия масив 
        if (int % 2 == 0) {//ако елемента който е дошъл от масива е четно число
            int += i;//го събираме със стойността на индекса където се намира
        } else {//ако ли пък не
            int -= i//вадим стонюйността на индекса където се намира 
        }
        sum2 += int//вече преобразувания елемент го добавяме в резултата от сбора
        //на елементите от новия масив
        moddArr.push(int)//пълним новия масив с променените числа от първия масив
    }
    console.log(moddArr);
    console.log(sum);
    console.log(sum2);

}
addAndSub([5, 15, 23, 56, 35])