
//Стинговете могат да се обхождат с for of!
let str1 = 'AWord';

for (let char of str1) {
    //console.log(char);
}

//concat()// конкатенира стрингове 
let greet = "Hello, ";
let name1 = "John";
let result = greet.concat(name1);
//console.log(result); // Expected output: "Hello, John"

//indexOf(substr) в скобите пишем думата която ни трябва и конзолата ни казва на кой индекс започва тя .
let str2 = "I am JavaScript developer";
//console.log(str2.indexOf("Java")); // Expected output: 5               
//console.log(str2.indexOf("java")); // Expected output: -1

//lastIndexOf(substr)показва ни къде се нямира търсеният субстринг последно
let str3 = "Intro to programming";
let last = str3.lastIndexOf("o");
//console.log(last); // Expected output: 11

//substring(startIndex, endIndex)//търсим определени субстрингове за това скобите имаме от кой индекс да започне
//търсенето и до кой индекс да  свърши(ексклузивно)
let str4 = "I am JavaScript developer";
let sub = str4.substring(5, 10);
//console.log(sub); // Expected output: JavaS

//replace(search, replacement)//първият параметър в скобите ни е какво търсим в стринга, а втория е с какво
//искаме да го замнеим;
let text = "Csk@";
let replaced = text.replace("@", "a")
//console.log(replaced);


let st = "ASentence"
let f = st.substring(1, 9)
//console.log(f);

//repeat(count) - Creates a new string repeated count times

let n=3;
for(let i=1;i<=n;i++){
    console.log('$'.repeat(i))
}