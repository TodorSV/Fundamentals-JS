function blackFlag(arr) {
    let piratesDays = Number(arr[0]);
    let plunder = Number(arr[1]);
    let expectedTreasure = Number(arr[2]);
    let currentPlunder = 0;

    for (let day = 1; day <= piratesDays; day++) {
        currentPlunder += plunder;
        if (day % 3 == 0) {

            currentPlunder += plunder * 0.5
        }



        if (day % 5 == 0) {
            currentPlunder = currentPlunder * 0.7
        }
    }
    if (currentPlunder >= expectedTreasure) {
        console.log(`Ahoy! ${currentPlunder} plunder gained.`);
    } else {
        console.log(`Collected only ${((currentPlunder / expectedTreasure) * 100).toFixed(2)}% of the plunder.`)
    }




}
blackFlag(["5", "40", "100"])
blackFlag(["10", "20", "380"])