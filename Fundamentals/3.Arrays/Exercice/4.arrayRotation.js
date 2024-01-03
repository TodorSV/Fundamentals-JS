function arrRotat(arr, rotation) {
    let rotated = [];
    let int = 0

    for (let i = 0; i < rotation; i++) {
        int = arr.shift()//премахваме от масива първият елемент като го запазваме в променлива;
        arr.push(int)//добавяме премахнатия елемент ,но като краен елемент;
    }
    console.log(arr.join(" "));
}
arrRotat([51, 47, 32, 61, 21], 2)