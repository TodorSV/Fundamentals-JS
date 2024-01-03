function smallestTwoNums(arr) {

    let arr1 = arr.sort((a, b) => a - b).slice(0, 2)
    console.log(arr1.join(" "));

}
smallestTwoNums([30, 15, 50, 5])