function piccolo(input) {
    let parking = new Set();//създаваме Сет

    for (let line of input) {//превъртаме входа
        let [command, number] = line.split(', ');//като създваме променливи разделени със запетая и интервал

        if (command == 'IN') {//правим проверка на командите 
            parking.add(number);//добавяме номера на колата 
        } else {
            parking.delete(number);//ако командата не съответства изтриваме променливата
        }
    }
    if(parking.size === 0){//ako няма коли в паркинга (сета)
        console.log('Parking Lot is Empty');//печатаме
    } else{
        let result = Array.from(parking);//превъщаме Сет-а в масив
        result.sort();//сортираме по азбучен ред 
        for (let car of result) {//превъртаме номерата от масива който сме създали
            console.log(car);//печатаме
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)