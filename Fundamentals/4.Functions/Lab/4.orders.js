function orders(product, counts) {
    /* Write a function that calculates the total price of an order and prints it on the console.
     The function should receive one of the following products:
      coffee, coke, water, snacks; and a quantity of the product.
       The prices for a single piece of each product are: 
    •	coffee - 1.50
    •	water - 1.00
    •	coke - 1.40
    •	snacks - 2.00
    Print the result formatted to the second decimal place.
    */
    let price = 0;
    let totalPrice = 0

    if (product === "coffee") {
        price = counts * 1.50;
    } else if (product === "water") {
        price = counts * 1.00;
    } else if (product === "coke") {
        price = counts * 1.40;
    } else if (product === "snacks") {
        price = counts * 2.00
    }
    totalPrice += price;

    console.log(totalPrice.toFixed(2));

}
orders("water", 5)
//console.log(orders("water", 5).toFixed(2))