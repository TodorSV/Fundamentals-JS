function odd(input) {
    let words = input.split(" ");//разделяме входа който е стринг и става на масив

    let result = {};//създаваме обект

    for (let word of words) {//превъртаме думите в масива 

        word = word.toLocaleLowerCase();//казваме ,всички думи в масива да станат с малки букви
        if (result.hasOwnProperty(word)) {//проверяваме дали дадена думасе намира в обекта
            result[word]++;//ако я има повишаваме с една единица
        } else {
            result[word] = 1;//ако я няма тя се появява в обекта за 1ви пър
        }

    }
    /* let filtered = Object.entries(result)//праим обекта на масив от масиви
     .filter(([word, count]) => {//филтрираме по ключ и стойност
         if (count % 2 == 1) {//ако броя на дадения ключ се появява нечетен брой пъти 
             return true;//връщаме ,че вярно 
         } else {
             return false;// в противен случай казваме ,че е грешно и не ни трябва 
         }
     });
 
     console.log(filtered.map(entry=>entry[0]).join(" "));//връшаме само ключовете от масива от масиви*/

    let output = [];//създаваме масив в който ще запазим нужният ни резултат
    for (let word in result) {//правим цикъл който да превърти думите в обекта
        if (result[word] % 2 == 1) {//ако думата се среща нечетен бой пъти
            output.push(word);//я добавяме в празния масив
        }
    }
    console.log(output.join(" "));//печатаме думите от масива с разстояние между тях. 
}
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')