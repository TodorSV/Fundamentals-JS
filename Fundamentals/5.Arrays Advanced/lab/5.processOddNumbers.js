function oddNums(nums) {
    /* 
 *You are given an array of numbers. 
 *Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
 *The input comes as an array of number elements.
 *The output is printed on the console on a single line, separated by space.
 */
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let odd = nums[i]
        if (i % 2 == 1) {
            odd = odd * 2
            arr.push(odd)
        };
    }
    console.log(arr.reverse().join(" "));
}
oddNums([10, 15, 20, 25])