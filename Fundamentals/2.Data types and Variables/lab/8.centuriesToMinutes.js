function centuryToMin(century) {
    let years = century * 100;//умножаваме вековете по това колко години има един век
    let days = Math.trunc(years * 365.242);//умножаваме годините от един век по 
    //дните от една година като използваме Math.trunc за да изрежем символите след десетичната запетая
    let hours = 24 * days;//умножаваме получените дни по часовете в едно денонощие
    let minutes = 60 * hours;//получените часове умножаваме по минутите от един час
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuryToMin(5)