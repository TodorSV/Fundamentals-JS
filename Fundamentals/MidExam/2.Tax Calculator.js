function taxCalc(arr) {
  let arr1 = arr.shift();
  let arr2 = arr1.split(">>");
  let tax = 0;
  let kilometresTax = 0;
  let yearsCounter = 0;
  let totalTax = 0;
  let totalColectedSum = 0;
  for (let car of arr2) {
    car = car.split(" ");
    let currCar = car[0];
    let years = Number(car[1]);
    let kilometres = Number(car[2]);

    if (currCar === "family") {
      tax = 50;
      for (let i = 1; i <= years; i++) {
        let currYear = i;
        yearsCounter++;

        if (currYear > 0) {
          tax -= 5;
        }
      }
      if (kilometres >= 3000) {
        kilometresTax = Math.floor(kilometres / 3000) * 12;
      }
      totalTax = tax + kilometresTax;
      totalColectedSum += totalTax;
      console.log(
        `A ${currCar} car will pay ${totalTax.toFixed(2)} euros in taxes.`
      );
    } else if (currCar === "heavyDuty") {
      tax = 80;
      for (let i = 1; i <= years; i++) {
        let currYear = i;
        yearsCounter++;

        if (currYear > 0) {
          tax -= 8;
        }
      }
      if (kilometres >= 9000) {
        kilometresTax = Math.floor(kilometres / 9000) * 14;
      }
      totalTax = tax + kilometresTax;
      totalColectedSum += totalTax;
      console.log(
        `A ${currCar} car will pay ${totalTax.toFixed(2)} euros in taxes.`
      );
    } else if (currCar === "sports") {
      tax = 100;
      for (let i = 1; i <= years; i++) {
        let currYear = i;
        yearsCounter++;

        if (currYear > 0) {
          tax -= 9;
        }
      }
      if (kilometres >= 2000) {
        kilometresTax = Math.floor(kilometres / 2000) * 18;
      }
      totalTax = tax + kilometresTax;
      totalColectedSum += totalTax;
      console.log(
        `A ${currCar} car will pay ${totalTax.toFixed(2)} euros in taxes.`
      );
    } else {
      console.log("Invalid car type.");
    }
  }
  console.log(
    `The National Revenue Agency will collect ${totalColectedSum.toFixed(
      2
    )} euros in taxes.`
  );
}

//taxCalc(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
taxCalc([
  "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",
]);
