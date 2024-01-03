function merge(arr1, arr2) {
    /*Write a function, which receives two string arrays and merges them into a third array.  
•	If the index of the element is even, add into the third array the sum of both elements at that index
•	If the index of the element is odd, add the concatenation of both elements at that index*/
    let thirdArr = [];//създаваме си трети масив който да пълним в последствие;
    //1.Правим си цикъл в който да въртим елементите от първия масив
    //въртим само него ,защото са еднакви по дължина с другия ;
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {//ако индекса е четно число
            thirdArr.push(Number(arr1[i]) + Number(arr2[i]))//добавяме елемета от масива в новия като
            //събираме неговата стойност със тази от втория масив
        } else {
            thirdArr.push(`${arr1[i]}${arr2[i]}`)//ако ли пък не ги конкатенираме
        }
    }
    console.log(thirdArr.join(" - "));

}
// новото ,което научих тук е ,че мога да достъпвам до втория масив през първия когато 
//вкарвам елементите в трети!!!!
merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)