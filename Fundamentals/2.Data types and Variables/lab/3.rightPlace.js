function rightPlace(string, char, string1) {

    let res = string.replace('_', char)//използваме .replace като му казваме кое с кое да заменим
    let output = res === string1 ? "Matched" : "Not Matched"//правим тернарен оператор в който питаме
    //след замяната в  стринга ,дали единия стринг е еднакъв с другия и какъв отговор да ни отпечата конзолата .
    console.log(output);
}
rightPlace('Str_ng', 'i', 'String')