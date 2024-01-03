function wTarcker(input){
    let result={}//създаваме обект
    let searchedWords=input.shift().split(" ");//махаме първия елемент и го разделяме по празно място
   
    for (let word of searchedWords){//превъртаме ел.,които ни трябват
        result[word]=0;//създаваме ключ в обекта с първоначална нулева стойност
    }
    for(let word of input){//превъртаме всички останали думи от входа 
        if(result.hasOwnProperty(word)){//проверяваме дали се появява някъде ключ и ако да
            result[word]++//увеличаваме стойността му с единица
        }
    }
    let sorted=Object.entries(result);//създаваме променлива която да превърне всичко в масиви 

    sorted.sort((a,b)=>b[1]-a[1]);//след това сортираме 

    for (let[word,count] of sorted){//правим цикъл който да превърти ключовете със сортираните стойности;
        console.log(`${word} - ${count}`);
    }
}
wTarcker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
     'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 
     'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )
 wTarcker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )   