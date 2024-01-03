function palindromeInt(arr) {
    /* A palindrome is a number, which reads the same backward as forward,
    such as 323 or 1001.
    Write a function, which receives an array of positive integers and checks
    if each integer is a palindrome or not.
    Output
    •	If the current integer is a palindrome, print: "true"
    •	Otherwise, print: "false"
    */
    let num;//Създаваме променлива за числото в нормален вид
    let check;//Създаваме променлива за числото прочетено отзад напред
    let reversed = ""//променлива с празен стринг(влиза в действие малко по-надолу)

    for (let i = 0; i < arr.length; i++) {//правим цикъл който да ни обхожда масива
        reversed = ""//при всяко завъртане променливата ще се изпразва от съдържание
        num = arr[i];//изтегляме първото число от масива 
        num = num.toString()//превръщаме го в стринг

        for (j = num.length - 1; j >= 0; j--) {//правим цикъл който да прочете полученото число 
            //отзад напред
            check = num[j];//прочитаме го отзад напред
            reversed += check//запазваме го в стринговата променлива 
            //която на следващото завъртане ще се изпразни от съдържание 
        }

        if (num == reversed) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
//
//palindromeInt([123, 323, 421, 121])
palindromeInt([32, 2, 232, 1010])