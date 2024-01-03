function chatLogger(arr) {
    let newArr = []
    for (let command of arr) {

        command = command.split(" ")
        let currCommand = command[0];

        if (currCommand === "Chat") {
            let message = command[1];
            newArr.push(message);
        } else if (currCommand === "delete") {
            if (arr.includes(command[1])) {
                newArr.splice(command[1], 1)
            }
        } else if (currCommand === "Edit") {
            let index = command[1];
            let edited = command[2];
            if (newArr.includes(index)) {

                newArr.splice(1, index, edited)
                newArr.splice(edited, 0,)
            }
        } else if (currCommand === "Pin") {
            let index = command[1];
            if (newArr.includes(index)) {
                let findIndex = newArr.indexOf(index);
                newArr.splice(findIndex, 1);
                newArr.push(index)
            }
        } else if (currCommand === "Spam") {
            let word1 = command[1];
            let word2 = command[2];
            let word3 = command[3];
            newArr.push(word1, word2, word3)
            newArr.splice(1, 2)
        } else if (currCommand == "end") {
            break;
        }
    }
    console.log(newArr.join("\n"));
}
chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"])
