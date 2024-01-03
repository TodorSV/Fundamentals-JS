function nthNumber(arr) {
    /** 
     * ! Write a function that collects each element of an array, on a given step.
    *!The input comes as an array of strings. The last element is N - the step.
    *!The collections are every element on the N-th step starting from the first one. 
    *!If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on, 
    *!until you reach the end of the array. Then, print elements in a row, separated by a single space.*/

    let lastNum = arr.pop();//взимаме последния елемент от масива който ни е стъпката
    let resultArr = [];//правим празен масив който да пълним с резултата който ни трябва
    for (let index in arr) {//фор in цикъл за да го обходим целия
        if (index % lastNum === 0) {//ако текущия индекс разделен процентно на последния 
            //елемент от масива е равен на нула
            resultArr.push(arr[index]);//го добавяме в новия масив
        }
    }
    console.log(resultArr.join(' '));
}
//nthNumber((['5', '20', '31', '4', '20', '2']))