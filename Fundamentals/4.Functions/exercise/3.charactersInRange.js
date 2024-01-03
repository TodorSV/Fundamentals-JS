function charAtRange(n1, n2) {
    /*
     *Write a function that receives two characters and prints on a single line all the characters in
     *between them according to the ASCII code. 
     *Keep in mind that the second character code might be before the first one inside the ASCII table.
     */
    let char1 = Math.min(n1.charCodeAt(0), n2.charCodeAt(0));//използваме Math.min за да намерим
    //минималното число от където да започнем
    let char2 = Math.max(n1.charCodeAt(0), n2.charCodeAt(0));//използваме Math.max за да намерим кой от 
    //двата символа е на по-горен номер в таблицата ASCII
    let fin = [];//създаваме празен масив който да пълним с резултата който ни е необходим
    for (let i = char1 + 1; i < char2; i++) {//правим цикъл който да върти от следващия елемент
        //който ни е нужен до крайния който ни е зададен(char2)
        fin.push(String.fromCharCode(i));//пълним масива като използваме и String.fromCharCode
        //за да обърнем отново числовото изражение на параметрите ни в стрингово такова

    } console.log(fin.join(" "));//печатаме

}
charAtRange('#', 'C')