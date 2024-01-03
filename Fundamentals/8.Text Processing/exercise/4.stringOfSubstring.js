function stringSubstring(word, input) {
    let string = input.split(" ");

    for (let str of string) {
        if (word.toLowerCase() === str.toLowerCase()) {
            console.log(word);
            return
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language'
)