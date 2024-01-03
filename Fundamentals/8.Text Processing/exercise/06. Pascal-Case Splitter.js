function pascal(input) {
    /*
    You will receive a single string. 
    This string is written in PascalCase format. Your task here is to split this string by every word 
    in it. 
    Print them joined by comma and space.
     */
    let splitted = input.split(/(?=[A-Z])/);
    console.log(splitted.join(", "));
}
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')