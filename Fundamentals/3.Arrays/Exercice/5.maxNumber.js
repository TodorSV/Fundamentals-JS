function maxi(arr) {
    let modd = [];//създаваме празен масив в който ще събираме най-големите числа 
    let int = 0;//създаваме променлива за запазване на число
    let int1 = 0//създаваме променлива за сравняване на число

    for (let i = 0; i < arr.length; i++) {//цикъл който да обхожда масива
        int = arr[i];//получаваме число от масива
        let bigger = true;//правим булева за сравнение 
        for (let j = i + 1; j < arr.length; j++) {//цикъл който да обхожда следващия елемент от масива 
            int1 = arr[j]//получаваме число от масива с ,което да правиум сравнение;

            if (int <= int1) {//ако първото получено число е по<= от второто число ,което
                //получаваме 
                bigger = false;//булевата става грешна
                break;//прекъсваме цикъла
            }
        }
        if (bigger) {//ако булевата остане true
            modd.push(int);//добавяме числото в празния масив

        }
    }
    console.log(modd.join(" "));
}
/*function maxi(arr) {
    arr.sort()
    function ascendingComp(a, b) {
        return (a - b);
    }
    arr.sort(ascendingComp);
    console.log(arr.reverse().splice());
}*/

maxi([14, 24, 3, 19, 15, 17])