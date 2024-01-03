function reveal(words, text) {
    words = words.split(', ');//разделяме по запетая и интервал

    for (let word of words) {//правим цикъл да превъртим думите които имаме за замяна
        text = text.replace('*'.repeat(word.length), word)//използваме replace за да заменим 
        //дължината на звездичките с дължината на думата която имаме 

    }
    console.log(text);
}
reveal('great, learning',
    'softuni is ***** place for ******** new programming languages'
) 