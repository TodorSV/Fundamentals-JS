function rever(index, arr) {
    /*Write a program, which receives a number n and an array of elements. 
    Your task is to create a new array with n numbers from the original array,
     reverse it and print its elements on a single line, space-separated.*/

    let newArr = [];//създаваме празен масив в който да съхраняваме дадени стойности

    for (let i = 0; i < index; i++) {//правим цикъл който да върти до индекса който ни трябва 
        newArr.push(arr[i]);//използваме push за да почнем да пълним празния масив с елементите 
        //в нормален ред
    }

    let result = ''//създаваме променлива със Стрингова стойност за да може резултата 
    //да се печата на един ред  
    for (let i = newArr.length - 1; i >= 0; i--) {//създаваме цикъл който да завърти елементите от 
        //новия масив отзад напред 
        result += newArr[i]//като вече обърнатите елемнти ги вкарваме в стринговата променлива 
        result += " "// даваме разстояние между стринговите кавички за да има и интервал когато 
        //печатаме на конзолата
    }
    console.log(result);//печатаме на конзолата.
}
rever(3, [10, 20, 30, 40, 50])

