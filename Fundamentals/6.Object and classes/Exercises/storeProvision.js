function store(arr1,arr2){
let storedProducts={};
for(let i=0;i<arr1.length;i+=2){
    let currProduct=arr1[i];//взимаме продукта от първият масив
    storedProducts[currProduct]=Number(arr1[i+1])//вкарваме в обекта следващият елемент които ни е количеството
}
for(let i=0 ;i<arr2.length;i+=2){
    let currProduct=arr2[i];//взимаме продукта от вторият масив
    if (!storedProducts.hasOwnProperty(currProduct)){//ако в обекта нямаме продукта който сме взели 
        storedProducts[currProduct]=0//го вкарваме в обекта със стойност 0
    }
    storedProducts[currProduct]+=Number(arr2[i+1])//и взимаме стойността от 2ят масив, но ако го има
    //събираме стойностите на вече съществуващия с добавената стойност от втория масив 
}
for(let product in storedProducts){
    console.log(`${product} -> ${storedProducts[product]}`);
}

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )