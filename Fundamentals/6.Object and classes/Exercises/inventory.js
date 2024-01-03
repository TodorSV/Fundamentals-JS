function inventory(input) {
    let heroes = [];//създаваме празен масив
    for (let element of input) {//създаваме в който да въртим входа
        let info = element.split(` / `)//разделяме елементите
        let hero = info[0];//взимаме името
        let level = info[1];//взимаме нивото 
        let items = info[2].split(", ").join(", ");//взимаме инвентара

        let currHero = {//създваме обект в който да ги съхраняваме 
            hero,
            level,
            items
        }
        heroes.push(currHero)//вкарваме обектите в празния масив
    }
    heroes.sort((a, b) => a.level - b.level);//сортираме им нивата
    for (let hero of heroes) {//създаваме цикъл през който да завъртим героите 
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)