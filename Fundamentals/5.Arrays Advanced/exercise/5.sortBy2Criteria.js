function sortBy2(array) {
    /*
   *Write a function that orders an array of strings, by their length in ascending order as primary criteria,
   *and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
   *The input comes as an array of strings.
   *The output is the ordered array of strings, each on a separate line.
   */

    let arr1 = array.sort((a, b) => a.length - b.length || a.localeCompare(b))//при сортиране може
    // да се навръзват методи за сортиране!!! 
    console.log(arr1.join("\n"));
}
//sortBy2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortBy2(['test', 'Deny', 'omen', 'Default'])