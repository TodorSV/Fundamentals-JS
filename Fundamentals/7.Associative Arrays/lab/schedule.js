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