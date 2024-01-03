function houseParty(arr) {
    /* 
    *Write a function that keeps track of guests that are going to a house party.
    *You will be given an array of strings. Each string will be one of the following:
    *-	"{name} is going!"
    *-	"{name} is not going!"
    *If you receive the first type of input, you have to add the person
    * if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
    *If you receive the second type of input, you have to remove the person 
    *if he/she is in the list (if not print: "{name} is not in the list!"). 
    *At the end print all the guests each on a separate line.
    
    */
    let list = []//създаваме си масив за гостите
    for (let line of arr) {//цикъл с който обикаляме масива
        let tokens = line.split(" ");//разделяме масива на части
        let name = tokens[0];//взимаме името 
        if (tokens.length === 3) {//ако дължината е 3
            let isInclude = list.includes(name);//правим проверка за името
            if (isInclude) {//ако името е в списъка 
                console.log(`${name} is already in the list!`);//печатаме
            } else {
                list.push(name);//ако не е го одбавяме в масива
            }
        } else {//ако дължината не е 3 
            let indexOfPerson = list.indexOf(name);//проверяваме на кой индекс е името
            if (indexOfPerson != -1) {//ако името фигурира в списъка
                list.splice(indexOfPerson, 1);//го премахваме ,защото е влезнало в тази проверка

            } else {
                console.log(`${name} is not in the list!`)//а ако го няма в масива 
                //печатаме ,че го няма .
            }
        }
    }
    console.log(list.join("\n"))
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)
