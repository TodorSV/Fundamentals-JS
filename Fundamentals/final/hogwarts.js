function hogwarts(input) {
    let spell = input.shift()

    for (let command of input) {

        let curr = command.split(" ")
        if(curr[0]!=="Illusion"&&curr[0]!=="Abjuration"&&curr[0]!=="Necromancy"
        &&curr[0]!=="Divination"&& curr[0]!=="Alteration"&&curr[0]!=="Abracadabra"){
            console.log("The spell did not work!");
        }
        if (curr[0] === 'Illusion') {
            let index = +curr[1];
            let replace = curr[2]
            spell = spell.split("")
            spell.splice(index, 1, replace)
             
            if (spell.length<=index ) {
                console.log('The spell was too weak.');
                spell=spell.join("")

            } else {
                console.log('Done!');
                spell = spell.join("");
            }
        } else if (curr[0] === "Abjuration") {
            spell = spell.toUpperCase();
            console.log(spell);
        } else if (curr[0] === "Necromancy") {
            spell = spell.toLowerCase();
            console.log(spell);
        }else if (curr[0]==="Divination"){
            let firstSub = curr[1];
            let secondSub = curr[2]
            spell=spell.replace(firstSub,secondSub)
            console.log(spell);
        }else if (curr[0]==="Alteration"){
            let removed= curr[1];
            spell=spell.replace(removed,'')
            console.log(spell);
        }else if (curr[0]==="Abracadabra"){
            break;
        }
    }
}
hogwarts(["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])

hogwarts((["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"])
)