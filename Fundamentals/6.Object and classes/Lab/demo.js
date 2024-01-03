function person(firstName, lastName, age) {
    let personObj = {}
    personObj.firstName = firstName;
    personObj.lastName = lastName;
    personObj.age = age;

    return personObj
}
//console.log(person("Peter", "Pan","20"))

function city(obj) {

    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`)
    }

}
//city({ name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"})
function strToObj(str) {
    let obj = JSON.parse(str);

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`)
    }


}
//strToObj('{"name": "George", "age": 40, "town": "Sofia"}')

function objToString(first, last, color) {
    let obj = {
        name: first,
        lastName: last,
        hairColor: color,
    }
    let obj1 = JSON.stringify(obj)

    console.log(obj1);
}
//objToString('George', 'Jones', 'Brown')

function singingCats(arr) {
    class kotki {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }
        sing(){`${this.name} ${this.age} says Meow`}
    }
    let cats=[]
    for(let cat of arr){
        cat.split(" ")

        let cats1=new kotki(cat[0],Number(cat[1]))
        cats.push(cats1)
    }
    for(let kotka of cats){
        kotka.sing()
    }

}



singingCats(['Mellow 2', 'Tom 5'])