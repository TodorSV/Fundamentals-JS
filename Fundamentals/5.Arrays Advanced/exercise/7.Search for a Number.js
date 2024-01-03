/*function search(arr, arr1) {
    let elementsToTake = arr1[0];
    let elemetsForDelete = arr1[1];
    let magicNum = arr[2];

    let newArr = arr.splice(0, elementsToTake)
    newArr.splice(0, elemetsForDelete)
    let count = 0
    for (let i = 0; i < newArr.length; i++) {
        let curr = newArr[i];
        if (curr == magicNum) {
            count++
        }
    }
    console.log(`Number ${magicNum} occurs ${count} times.`);
search([7, 1, 5, 8, 2, 7],
    [3, 1, 5])
}*/
//
function search(arr, arr1) {
    let elementsToTake = arr1[0];
    let elemetsForDelete = arr1[1];
    let magicNum = arr1[2];

    let newArr = arr.splice(0, elementsToTake);
    newArr = newArr.splice(elemetsForDelete);
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {

        if (newArr[i] === magicNum) {
            count++;
        }
    }
    console.log(`Number ${magicNum} occurs ${count} times.`);

}
search([5, 2, 3, 4, 1, 6], [5, 2, 3])


