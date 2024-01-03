function burgerBus(arr) {
    // let cities = Number(arr[0]);

    let count = 0
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        let currCity = arr[i];
        let earnings = Number(arr[i += 1]);
        let expenses = Number(arr[i += 1]);
        count++
        if (count % 3 == 0) {
            if (count % 5 == 0) {
                earnings = (earnings * 0.9) - expenses
                console.log(`In ${currCity} Burger Bus earned ${earnings.toFixed(2)} leva.`);
                sum += earnings
                break;
            }
            let costs = expenses / 2
            earnings = earnings - expenses - costs
            sum += earnings
            console.log(`In ${currCity} Burger Bus earned ${earnings.toFixed(2)} leva.`);
        } else {
            if (count % 5 == 0) {
                earnings = (earnings * 0.9) - expenses
                console.log(`In ${currCity} Burger Bus earned ${earnings.toFixed(2)} leva.`);
                sum += earnings
                break;
            }
            earnings = earnings - expenses;
            sum += earnings
            console.log(`In ${currCity} Burger Bus earned ${earnings.toFixed(2)} leva.`);

        }

    }
    console.log(`Burger Bus total profit: ${sum.toFixed(2)} leva.`)
}
//burgerBus(["3", "Sofia", "895.67", "213.50", "Plovdiv", "2563.20", "890.26", "Burgas", "2360.55", "600.00"])
burgerBus(["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])
