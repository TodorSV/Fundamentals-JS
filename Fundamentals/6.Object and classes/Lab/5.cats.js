function cats(arr) {
    let cats = arr;
    class kotki {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let arr1 = []

    for (let cat of cats) {
        let curr = cat.split(" ")

        let kotka = new kotki(curr[0], Number(curr[1]));
        arr1.push(kotka)
    }
    for (let kotka of arr1) {
        kotka.meow()
    }
    console.log();
}
cats(['Mellow 2', 'Tom 5'])