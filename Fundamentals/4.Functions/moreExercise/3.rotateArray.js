function rotateArray(arr) {
    /*Write a function that rotates an array.
     The array should be rotated to the right side, 
     meaning that the last element should become the first, upon rotation. 
    The input comes as an array of strings. 
    The last element of the array is the amount of rotation you need to perform.
    The output is the resulting array after the rotations.
     The elements should be printed on one line, separated by a single space.
     */
    let rotations = +arr[arr.length - 1];
    arr.pop();
    for (let i = 1; i <= rotations; i++) {
        let current = arr.pop();

        arr.unshift(current);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])