function listOfProducts(list) {
    let alphabetical = list.sort()

    for (let i = 0; i <= alphabetical.length; i++) {
        let currProduct = alphabetical[i];
        if (currProduct == undefined) {
            break;
        }
        console.log(`${i + 1}.${currProduct}`)
    }
}
console.log(listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']))