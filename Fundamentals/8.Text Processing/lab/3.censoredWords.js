function censored(text, word) {
    //Write a function that receives a text as a first parameter and a single word as a second.
    // Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
    while(text.includes(word)){//докато думата я има в текста
        text=text.replace(word,"*".repeat(word.length))//замени всеки стринг от думата с *
    }
    console.log(text);
}
censored('A small sentence with some words', 'small')