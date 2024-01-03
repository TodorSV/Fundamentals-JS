//let numbers=[1,2,3,4,5,6];

let products = [
  {
    name: "Murati Slims",
    price: 5.4,
    count: 30,
  },
  {
    name: "L&M Loft",
    price: 5.2,
    count: 36,
  },
  {
    name: "Marlboro TouchXl",
    price: 5.4,
    count: 20,
  },
];

let totalProductsValue = products.map((item) => item.price * item.count);
/*let totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}))*/
console.log(totalProductsValue);
