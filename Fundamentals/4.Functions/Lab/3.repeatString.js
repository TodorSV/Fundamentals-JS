function repeatString(str, repeats) {
    /* Write a function that receives a string and a repeat count n.
    The function should return a new string (the old one repeated n times).*/
    let result = ""//променлива която да в ръща стринг
    for (let i = 0; i < repeats; i++) {//цикъл който да завърти колкото са ни повторенията 
        result += str;//запазваме какво идва от цикъла

    }
    return result;//запазваме резултата


}
console.log(repeatString("abc", 3));//за да го върнем го извикваме с console.log