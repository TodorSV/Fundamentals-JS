function firstLast(arr) {
    console.log(arr[0] + arr[arr.length - 1]);
}
//firstLast([2])

function daysWeek(input) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    for (let day of days) {
        day.split(",");
        if (day === "Monday" && input === 1) {
            console.log(day);
        } else if (day === "Tuesday" && input === 2) {
            console.log(day);
        }
        else if (day === "Wednesday" && input === 3) {
            console.log(day);
        } else if (day === "Thursday" && input === 4) {
            console.log(day);
        } else if (day === "Friday" && input === 5) {
            console.log(day);
        } else if (day === "Saturday" && input === 6) {
            console.log(day);
        } else if (day === "Sunday" && input === 7) {
            console.log(day);

        }
    }
    if (input > 7 || input < 1) {
        console.log("Invalid day!");
    }
}
//daysWeek(0)
//let nums = [10, 20, 30];
//nums[4] = 50; // Will resize the array
//console.log(nums); // [10, 20, 30, <empty>, 50]
//console.log(nums.length); // 5
//console.log(nums[3]=40); // undefined

function reverse(n, arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === n) {
            break;
        }
        let digit = Number(arr[i])

        array.push(digit);

    }
    console.log(array.reverse().join(" "));
}
//reverse(3, [10, 20, 30, 40, 50])

function reverseInPlace(arr) {
    let line = ""
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = arr[i];
        line += " " + digit
    }
    console.log(line);
}
//reverseInPlace(['a', 'b', 'c', 'd', 'e'])
//let numbers = [1, 2, 3, 4, 5];
//for (let number of numbers)
//output += `${number} `;
//console.log(output);
function sumEven(arr) {
    let sum = 0
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += Number(num);
        }
    }

    //console.log(sum);
}
//sumEven(['1','2','3','4','5','6'])
function evenAndOddSubtraction(arr) {
    let sumEven = 0;
    let sumOdd = 0
    let odd = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += Number(num);
        } else {
            sumOdd += Number(num) + odd
        }
    }
    //console.log(sumEven - sumOdd);
}

//evenAndOddSubtraction([3, 5, 7, 9])

function equal(arr1, arr2) {

    let sum = 0
    let index = 0
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i])
        sum += arr1[i];

    }
    for (let j = 0; j < arr2.length; j++) {
        arr2[j] = Number(arr2[j])

    }


}
//equal(['1','2','3','4','5'], ['1','2','4','4','5'])

function addSub(arr) {
    let newArr = []
    let sum = 0
    let sum1 = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] % 2 === 0) {
            sum1 += arr[i] + i
            newArr.push(arr[i] + i)
        } else {
            sum1 += arr[i] - i
            newArr.push(arr[i] - i)
        }
    }
    console.log(newArr);
    console.log(sum);
    console.log(sum1);
}
//addSub([5, 15, 23, 56, 35])
function commonEls(arr1, arr2) {

    let el1
    let el2
    for (let i = 0; i < arr1.length; i++) {
        el1 = arr1[i]
        for (let j = 0; j < arr2.length; j++) {
            el2 = arr2[j]
            if (el1 === el2) {
                console.log(el1);
            }
        }
    }
}
//commonEls(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
//commonEls(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l'])
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
//merge(['5', '15', '23', '56', '35'],
//['17', '22', '87', '36', '11'])
function arrayRotation(arr, rotate) {
    let newArr = [];
    let rotation = 0
    while (rotation < rotate) {
        rotation++
        for (let i = 0; i < arr.length; i++) {

            let int = arr[i];
            arr.push(int);
            arr.shift(int)
            break;
        }
    }
    console.log(arr.join(" "));
}
//rrayRotation([32, 21, 61, 1], 4)
function equalSums(arr){

}
equalSums([1, 2, 3, 3])