function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorprice) {
    let sum = 0

    for (let fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 == 0) {
            sum += helmetPrice;
        }
        if (fight % 3 == 0) {
            sum += swordPrice;
        }
        if (fight % 6 == 0) {
            sum += shieldPrice;
        }
        if (fight % 12 == 0) {
            sum += armorprice;
        }

    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiator(7,
    2,
    3,
    4,
    5)