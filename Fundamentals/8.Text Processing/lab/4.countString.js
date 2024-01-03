function count(text, word) {

    let text1 = text.split(" ");
    let count = 0;
    for (let str of text1) {
        if (str === word) {
            count++
        }
    }
    console.log(count);
    }

count('This is a word and it also is a sentence',
    'is'
)