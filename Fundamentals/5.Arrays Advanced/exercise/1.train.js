function train(train) {
    /*
    *You will be given an array of strings.
    *The first element will be a string containing wagons (numbers). 
    *Each number inside the string represents the number of passengers that are currently in a wagon. 
    *The second element in the array will be the max capacity of each wagon (single number).
    *The rest of the elements will be commands in the following format:
    *•	Add {passengers} – add a wagon to the end with the given number of passengers.
    *•	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
    *At the end, print the final state of the train (all the wagons separated by a space).
    */
    let wagonsWithPassengers = train.shift().split(" ").map(Number);//взимаме първата част от 
    //масива и я разделяме с интервал, и после я превръщаме в числа които репрезентират заетоста на
    //вагони във влак  
    let maxpeople = Number(train.shift());//взимаме втората част от масива и я превръщаме в число 
    //това ни е максималния брой пътници за вагон
    for (let command of train) {//цикъл който да въррти останалата част от масива която съдържа 
        //команди и числа
        let currComand = command.split(" ");//разделяме временната команда на две части
        if (currComand[0] === "Add") {//на нулев индекс имаме команда която ако е Add
            wagonsWithPassengers.push(Number(currComand[1]));//добавяме нов вагон с числовата 
            //репрезентация на 1ви индекс от временната команда
        } else {//или
            for (let index = 0; index < wagonsWithPassengers.length; index++) {//правим цикъл
                //който да върти по вагоните
                if (//
                    wagonsWithPassengers[index] + Number(currComand[0]) <= maxpeople//ако 
                    //заетоста на вагона плюс хората ,които подаваме е по малка или на максималния
                    // брой
                    //пътници
                ) {
                    wagonsWithPassengers[index] += Number(currComand[0]);//то тогава добавяме новия 
                    //брой
                    //пътници във вагона 
                    break;// и прекъсваме докато дойде следващия брой пътници
                    // ако вагона се напълни почваме да проверяваме вагон по вагон къде можем 
                    //да ги настаним
                }
            }
        }
    }
    console.log(wagonsWithPassengers.join(" "))
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)