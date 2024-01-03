function gladiatorInventory(array) {
    /*
*    As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. 
*You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
*You may receive the following commands:
*•	Buy {equipment}
*•	Trash {equipment}
*•	Repair {equipment}
*•	Upgrade {equipment}-{upgrade}
*If you receive the Buy command, you should add the equipment at the last position in the inventory,
* but only if it isn't bought already.
*If you receive the Trash command, delete the equipment if it exists.
*If you receive the Repair command, you should repair the equipment if it exists
* and place it in the last position.
*If you receive the Upgrade command, you should check if the equipment exists and insert after it
* the upgrade in the following format: "{equipment}:{upgrade}".

    */
    let inventory = array.shift()//взимаме доспехите от масива 
    let string = inventory//правим масив от доспехите
    let newInvent = inventory.split(" ")//разделяме стринга в масива на малки стрингове


    for (let command of array) {//правим цикъл за командите
        command = command.split(" ")//разделяме командите от доспехите в големия масив
        let currCommand = command[0];//правим променлива за команда [0]-indeks
        if (currCommand === "Buy") {//ако командата е купувай
            let item = command[1];//то тогава доспехите ,които са на [1]индекс 
            if (!newInvent.includes(item)) {//проверяваме дали ги няма в масива с доспехите 
                newInvent.push(item);//и ако ги няма ги добавяме 
            }
        } else if (currCommand === "Trash") {//ако командата е да се изхвърли снаражение
            let item = command[1];//намираме какво трябва да се изхвърли
            let deleted = newInvent.indexOf(command[1])//намираме индекса на който се намира
            if (newInvent.includes(item)) {//проверяваме дали го има в големия масив
                newInvent.splice(deleted, 1)// иако го има го изтриваме
            }
        } else if (currCommand === "Repair") {//ако ще ремонтираме
            let item = command[1];//намираме какво ще се ремонтира
            let repaired = newInvent.indexOf(command[1])//намираме на кой индекс се намира
            if (newInvent.includes(item)) {//проверяваме дали го има 
                let spliced = newInvent.splice(repaired, 1);//и ако го има изтриваме го от масива 
                newInvent.push(item);//и го връщаме ремонтиран

            }
        } else if (currCommand === "Upgrade") {//ако ще ъпгрейдваме
            let item = command[1];//намираме кое ще се ъпгрейдва
            let newItems = item.split("-")//разделяме елемента на 2 части
            let upgraded = newItems[0];//ъпрейднатата част е на [0]-индекс
            let kind = newItems[1];//начина на ъпгрейдване е на [1-индекс]
            if (newInvent.includes(upgraded)) {//проверяваме дали го има в масива с доспехи
                let index = newInvent.indexOf(upgraded);//намираме на кой индекс е 
                newInvent.splice(index + 1, 0, `${upgraded}:${kind}`)//добавяме го
            }

        }
    }
    console.log(newInvent.join(" "));//печатаме с разстояние между елементите.
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield',
    'Repair Spear', 'Upgrade SWORD-Steel']
)
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)
