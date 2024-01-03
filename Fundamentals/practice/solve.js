// /*function solve(num) {

//     num = num.toString()//превръшщаме числото в стринг директно
//     let sum = 0;//създаваме променлива която да ни запазва резултата от сбора на цифрите


//     for (let i = 0; i < num.length; i++) {//създаваме цикъл от който да изтеглим символите от стринга 
//         //един по един
//         sum += Number(num[i]);//събираме всеки елемент от стринга превърнат в число 
//         //Number(num[i])
//     }
//     let result = sum.toString().includes('9');//създаваме променлива която превръща сумираното число в стринг
//     // и проверяваме дали сбора на цифрите е равен на 9
//     console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
//     //в конзолата създаваме тернарен оператор който да ни каже сборът равен ли е на 9 или не 
// }*/
// /*function solve(num) {
//     let result = 0
//     let amazing = result.includes(9)
//     let res = num.toString()
//     for (let i = 0; i < res.length; i++) {
//         let curr = Number(res[i])
//         result += curr

//     }
//     if (result === 9) {
//         console.log(`${num.toString()} Amazing? True`);
//     } else {
//         console.log(`${num.toString()} Amazing? False`);
//     }
// }


// //solve(999)*/

function triangleArea(p1, p2, p3) {
    let semiParam = (p1 * +p2 + p3) / 2
    let area = Math.sqrt(semiParam * (semiParam - p1) * (semiParam - p2) * (semiParam - p3))
    console.log(area)
}



//triangleArea(2,
// 3.5,
//4
//)
function characterSequence(input) {

    let string = ""

    for (let i = input.length - 1; i >= 0; i--) {
        ;
        string += input[i]

    } console.log(string)

}

//characterSequence(["softuni"])

//solve("Hello")
function distanceBetweenPoints(x1, y1, x2, y2) {
    // we will use pythagorean theorem
    // a^2 + b^2 = c^2
    // a & b are both sides of 90 deg triangle
    // c = Math.Sqrt(x^2 + b^2)
    // is the hypotenuse
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);

    // distance is "c"
    let distance = Math.sqrt((a * a) + (b * b));
    console.log(distance);
}
//distanceBetweenPoints(2, 4, 5, 0)
let nums = [5, 10, 15, 20, 25, 30];
nums.splice(3, 2, "twenty", "twenty-five");
console.log(nums.join('|')); // 5|10|15|twenty|twenty-five|30
