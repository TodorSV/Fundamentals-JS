function equalArrays(arr1, arr2) {
    /* Write a program, which receives two string arrays containing number representations,
     and prints on the console whether they are identical.
Arrays are identical if their elements at same indexes are equal.
 If they are identical, find the sum of the first array and print the following message: 
`Arrays are identical. Sum: {sum}`
 If the arrays are NOT identical, find the first index where the arrays differ 
 and print the following message:
 `Arrays are not identical. Found difference at {index} index`
*/
    let sum = 0;//създаваме променлива в която да съхраним сумата от сметките в единия масив
    let sum1 = 0;
    let equals = false;//създаваме булева стойност ,която да ни помогне после за решението

    for (let i = 0; i < arr1.length; i++) {//създаваме цикъл който да обходим и да вземем елементите от него
        arr1[i] = Number(arr1[i]);//изтегляме елемнтите от масива един по един
        sum += arr1[i]//събираме елементите от масива ;

    }
    for (let i = 0; i < arr2.length; i++) {//съсздаваме 2тори цикъл който да обходим за да видим дали е 
        //идентичен с предния
        sum1 += Number(arr2[i])
        arr2[i] = Number(arr2[i])//изтегляме елемнтите от масива един по един
        if (arr1[i] !== arr2[i]) {//ако изтеглените елементи от двата масива са различни някъде
            console.log(`Arrays are not identical. Found difference at ${i} index`);//изписваме на конзолата
            //нужното ни съобщение и номера на индекса където стойноатите са различни
            break;//прекъсваме програмата 
        }

    }


    if (sum == sum1) {//ако булевата стойност е вярна 
        console.log(`Arrays are identical. Sum: ${sum}`);//печатаме съобщението на конзолата плюс
        //сбора на елементите от единия масив(трябва ни само единия сбор ,защото сме казали ,че 
        //масивите са идентични).
    }




}
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])
equalArrays(['10', '20', '30'], ['10', '20', '30'])