function integerAndFloat(n1, n2, n3) {
    let sum = n1 + n2 + n3;//събираме трите стойности
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';//ако сумата разделене с остатък на 1
    // е равна на 0 ,числото е цяло, а ако не  тот тогава е плаващо 
    console.log(sum);
}
integerAndFloat(9, 100, 1.1)