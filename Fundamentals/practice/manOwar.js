function manOWar(arr) {
  let ship = arr.shift();
  let pirateShip = ship.split(">").map(Number);
  let ship1 = arr.shift();
  let warShip = ship1.split(">").map(Number);
  let maxHealth = arr.shift();
  maxHealth = Number(maxHealth);
  let count = 0;
  let isSunken = false;

  // console.log(pirateShip, warShip);

  for (let command of arr) {
    command = command.split(" ");

    let currCommand = command[0];
    if (currCommand === "Fire") {
      let index = Number(command[1]);
      let damage = Number(command[2]);
      if (warShip.length >= index) {
        for (let i = 0; i < warShip.length; i++) {
          let sections = warShip[i];

          if (count === index) {
            sections = sections - damage;
            if (sections <= 0) {
              console.log("You won! The enemy ship has sunken.");
            }
            break;
          }
          count++;
        }
      }
    } else if (currCommand === "Defend") {
      let start = Number(command[1]);
      let end = Number(command[2]);
      let damagePirateShip = Number(command[3]);
      if (
        start >= 0 &&
        start <= pirateShip.length - 1 &&
        end <= pirateShip.length - 1 &&
        end > start
      ) {
        for (let j = start; j <= end; j++) {
          pirateShip[j] -= damagePirateShip;
          if (pirateShip[j] <= 0) {
            console.log("You lost! The pirate ship has sunken.");
            isSunken = true;
            break;
          }
        }
      }
    } else if (currCommand === "Repair") {
      let index = Number(command[1]);
      let health = Number(command[2]);

      if (index >= 0 && index <= pirateShip.length - 1) {
        for (let i = 0; pirateShip.length; i++) {
          pirateShip[index] += health;
          break;
        }
        if (health > maxHealth) {
          health = maxHealth;
        }
      }
    } else if (currCommand === "Status") {
      let repairCount = 0;
      for (let k = 0; k < pirateShip.length; k++) {
        if ((pirateShip[k] / maxHealth) * 100 < 20) {
          repairCount++;
        }
      }
      console.log(`${repairCount} sections need repair.`);
    }
  }
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
