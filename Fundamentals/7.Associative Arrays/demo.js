//let assocArr = {};
//assocArr['one'] = 1;
//assocArr['two'] = 2;
//assocArr['three'] = 3;

//for(let key in assocArr) {
// console.log(key + " = " + assocArr[key]);   
//}

function solve(input) {

    let phonebook = {}; //създаваме обект
    for (let line of input) {//правим цикъл за да превъртим елементите от получения масив
        let tokens = line.split(' ');//взимаме първия ред и го разделяме с празено разстояние
        let name = tokens[0];//нулевия елемент от новия масив ни е името
        let number = tokens[1];//1ви индекс ни е номера
        phonebook[name] = number;//в обекта създаваме ключ който да съдържа 
        //името и да е равен на номера
    }
    for (let key in phonebook) {//правим нов цикъл който да върти ключовете на обекта
        console.log(`${key} -> ${phonebook[key]}`);//печатаме името и номера
        //  ${phonebook[key]} по този начин викаме стойноста на ключа в обекта
    }
}


/*solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)*/

function schedule(input) {
    let meetings = {};//създаваме обект
    for (let line of input) {//жикъл да превъртим масива за вход
        let [weekday, name] = line.split(' ');//създаваме променлива от ключ и стойност и ги разделяме
        if (meetings.hasOwnProperty(weekday)) {//ако в обекта има  ключ(weekday)
            console.log(`Conflict on ${weekday}!`);//принтираме ,че има проблем в този ден
        } else {
            meetings[weekday] = name;//ако в обекта няма такъв ключ,присвоявамена на ключа стойност
            console.log(`Scheduled for ${weekday}`);
        }

    }
    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
//schedule(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim']);

//let phonebook = {
//  'Tim': '0876566344',
//'Bill': '0896543112';
//let entries = Object.entries(phonebook);
//console.log(entries); // Array of arrays with two elements each
// [ ['Tim', '0876566344'],
//   ['Bill', '0896543112'] ]
//let firstEntry = entries[0];
//console.log(firstEntry[0]);  // Entry key -> 'Tim'
//console.log(firstEntry[1]);  // Entry value -> '0876566344'

//* Sort
//entries.sort((a, b) => {//a=keyA
//keyA = a[0]; така достъпваме до ключа ако []=[1] достъпваме стойността 
//  keyB = b[0]; така достъпваме до ключа
// Perform comparison and return negative, 0 or positive
//});

//entries.sort(([keyA, valueA], [keyB, valueB]) => {
// Perform comparison and return negative, 0 or positive
//});

function addressBook(input) {
    let book = {};//създаваме обект

    for (let line of input) {//превъртаме входа в цикъл
        let [name, address] = line.split(":");//казваме ка да се раздели масива вместо да пишем,
        //две променливи с индексиращите скоби правим две променливи наведнъж 
        book[name] = address//създаваме асоциативен масив който да се запазва в обекта  
    }

    let entries = Object.entries(book);//деструктурираме обекта на масив от масиви
    entries.sort((a, b) => a[0].localeCompare(b[0]))//и го сортираме по ключ

    for (let entry of entries) {//праим цикъл в който да превъртим сортирания главен масив 
        let name = entry[0];
        let address = entry[1];

        console.log(`${name} -> ${address}`);
    }


}

//addressBook(['Tim:Doe Crossing','Bill:Nelson Place','Peter:Carlyle Ave','Bill:Ornery Rd'])

/*(let map = new Map();
map.set(1, 'one');//set=добавяне на ел,(1=ключ който може да е число или стринг,'one'=стойност)
map.set(2, 'two');
map.get(1)//get =return value
map.get(2)

console.log(map.get(1));
console.log(map.get(2));
console.log(map.size);//size=големината на map колко елемента(ключа) има в него
console.log(map.has(1));//has=показва има ли го ключа ако го има дори да е празен дава true
console.log(map.has(3));//false
map.delete(key)//изтрива ключа който му зададем в скобите
map.clear()//трие всичко в map
*/
function storage(input) {
    let map = new Map()//създваме мап

    for (let line of input) {//превъртаме входа който ни е масив
        let tokens = line.split(" ");//деструктурираме го
        let product = tokens[0];
        let quantity = +tokens[1];

        if (!map.has(product)) {//ако в мапа нямаме продукта 
            map.set(product, quantity);//добавяме в него и продукта и количеството 

        } else {//а ако вече имаме продукта в мапа 
            let currQuantity = map.get(product);//правим променлива в която да съхраняваме 
            //досегашните стойности на продукта 
            let newQuantity = currQuantity += quantity;//правим променлива в която събираме моментното
            //количество с новопоявилото се 
            map.set(product, newQuantity);//добавяме новите стойности в мапа 
        }

    }
    let entries = Array.from(map.entries());//превръщаме мапа в масив от масиви
    for (let [product, quantity] of entries) {//правим цикъл в който да превъртим елементите 
        console.log(`${product} -> ${quantity}`);//печатаме
    }
}
//storage(['tomatoes 10','coffee 5','olives 100', 'coffee 40']);

function grades(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(" ");
        let name=tokens.shift()
        let grades=tokens.map(Number)
        
        
        if(!result.has(name)){
            result.set(name,[])
        }
        let existing=result.get(name)
        for (let grade of grades){
            existing.push(grade)
        }

      
    }
    let sorted = Array.from(result);
    sorted.sort((a, b) => {
        return a[0].localeCompare (b[0])
    })

    for (let [name, grades] of sorted) {
        let avg=0;
        for(let grade of grades){
        avg+=grade
    } 
    
    console.log(`${name} -> ${(avg/grades.length).toFixed(2)}`)
}
}


//grades(['Lilly 4 6 6 5','Tim 5 6','Tammy 2 4 3','Tim 6 6'])

function wordOccurrences(arr) {
    let map = new Map();
    let words = 0;
    for (let word of arr) {        
        if (!map.has(word)) {
            words = 1;
        } else {
            words = map.get(word) + 1;
        }
        map.set(word, words);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
 
    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}