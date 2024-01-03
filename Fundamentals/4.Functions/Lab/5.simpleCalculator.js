function calc(n1, n2, operator) {

    switch (operator) {
        case "multiply": let multiply = (n1, n2) => n1 * n2;//за да ни работи функцията я запазваме в
            // променлива,след това и подаваме параметрите и я иизпълняваме
            console.log(multiply(n1, n2));//тук вече името на функцията знае какво да прави с параметрите
            // и печата
            break;
        case "divide": let divide = (n1, n2) => n1 / n2;
            console.log(divide(n1, n2));
            break;
        case "add": let add = (n1, n2) => n1 + n2;
            console.log(add(n1, n2));
            break;
        case "subtract": let subtract = (n1, n2) => n1 - n2
            console.log(subtract(n1, n2));
            break;
    }

}
calc(5,
    5,
    'multiply'
)