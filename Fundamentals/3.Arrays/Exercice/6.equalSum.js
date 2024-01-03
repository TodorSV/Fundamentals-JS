function solve(arr) {
    /* Write a function that determines if there exists an element in the array of numbers
     such that the sum of the elements on its left is equal to the sum of the elements on its right. 
If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is no such index.
*/
    let result = 'no';//създаваме променлива на която казваме ако няма от ляво или от дясно сума 
    //печатаме "no"

    for (let i = 0; i < arr.length; i++) {//създаваме цикъл с който да обходим целия масив 
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < i; j++) {//започваме въртенето от индекса до който сме стигнали
            //от ляво надясно
            leftSum += arr[j];//събираме елементите от масива 
        }

        for (let k = arr.length - 1; k > i; k--) {//въртим отдясно наляво
            rightSum += arr[k];//събираме елементите от масива 
        }
        if (leftSum === rightSum) {//ако двете суми са равни 
            result = i;//печатаме индекса на който се намираме от цикъла който върти
            //от ляво надясно
            break;//прекъсваме и излизаме от цикъла
        }
    }
    console.log(result);//печатаме изхода 

}
solve([1, 2])