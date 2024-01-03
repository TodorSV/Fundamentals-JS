function rR(input) {
    /*
    Write a function that receives a single string
    and replace any sequence of the same letters with a single corresponding letter.
    */
    let unique = "";//празен стринг в който да пазим резултата
    for (let i = 0; i < input.length; i++) {//цикъл който да извърти входа 
        let currChar = input.charAt(i);//символ на нулев индекс
        let nextChar = input.charAt(i + 1);//символ на 1ви индекс
        if (currChar != nextChar) {//ако двата символа са различни 
            unique += currChar//добави в празния стринг символа от нуле индекс
        }
    }
    console.log(unique);
}
rR('aaaaabbbbbcdddeeeedssaa')