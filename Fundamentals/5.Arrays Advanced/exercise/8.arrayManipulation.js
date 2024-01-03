function arrManipulation(array, commandArray) {
    /*
*Write a function that receives an array of integers and an array of string commands and executes them
* over the array. The commands are as follows:
*add <index> <element> – adds element at the specified index 
*(elements right from this position inclusively are shifted to the right).
*•addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
*•contains <element> – prints the index of the first occurrence of the specified element (if exists)
* in the array or -1 if the element is not found.
*•remove <index> – removes the element at the specified index.
*•shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
*For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
*•sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
*For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
*print – stop receiving more commands and print the last state of the array in the following format:
 *        `[ {element1}, {element2}, …elementN} ]`
 * Note: The elements in the array must be joined by comma and space (, ).

    */

    let command;

    for (let command of commandArray) {
        command = command.split(" ")
        let currCommand = command[0];

        if (currCommand === "add") {
            let index = Number(command[1]);
            let addedNum = Number(command[2])
            array.splice(index, 0, addedNum)
        } else if (currCommand === "addMany") {
            let index = Number(command[1]);
            command.splice(0, 2)
            let nums = command.map(Number);
            array.splice(index, 0, ...nums)

        } else if (currCommand === "contains") {
            let result = array.indexOf(Number(command[1]))
            console.log(result)
            /*let searched = Number(command[1])
            let myArray = array.includes(searched)

            if (myArray) {
                console.log(0);
            } else {
                console.log(-1);
            }*/
        } else if (currCommand === "remove") {
            let index = Number(command[1]);

            //let removed = 
            array.splice(index, 1)
        } else if (currCommand === "shift") {
            let shifted = Number(command[1]);

            for (let i = 0; i < shifted; i++) {
                let shiftedEl = array.shift()
                array.push(shiftedEl)

            }
        } else if (currCommand === "sumPairs") {
            let sumArr = [];
            if (array.length % 2 !== 0) {
                array.push(0);
            }
            for (let i = 0; i < array.length - 1; i += 2) {
                let sumint = array[i] + array[i + 1];
                sumArr.push(sumint)
            }
            array = sumArr
        } else if (currCommand === "print") {
            console.log(`[ ${array.join(", ")} ]`)
        }



    }
}
//arrManipulation([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])
arrManipulation([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 115', 'remove 3', 'shift 1', 'print'])