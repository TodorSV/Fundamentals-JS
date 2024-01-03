function treasureHunt(array) {
    let inventory = array.shift();
    let chest = inventory.split("|");

    for (let command of array) {
        command = command.split(" ");
        let currCommand = command[0];

        if (currCommand === "Loot") {
            for (let i = 1; i < command.length; i++) {
                let item = command[i];

                if (!chest.includes(item)) {
                    chest.unshift(item);
                }
            }
        } else if (currCommand === "Drop") {
            let index = Number(command[1]);
            let spliced = chest.splice(index, 1);
            chest.push(spliced.toString())
        } else if (currCommand === "Steal") {
            let items = Number(command[1]);
            let stealed = chest.splice(chest.length - items)
            
            console.log(stealed.join(", "));//(arr.length - elemsToDelete,elemsToDelete)

        } else if (currCommand === "Yohoho") {
            break;
        }
    }
    let sum = 0;
    if (chest.length === 0) {
        console.log("Failed treasure hunt.");
    } else {

        for (let loot of chest) {
            loot = loot.length
            sum += loot
        }
        console.log(`Average treasure gain: ${(sum / chest.length).toFixed(2)} pirate credits.`);
    }


}

/*treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])
)*/
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
