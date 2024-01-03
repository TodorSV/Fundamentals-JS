function smallestNum(n1, n2, n3) {
    let smallest;

    if (n1 <= n2 && n1 <= n3) {
        smallest = n1
    } else if (n2 <= n1 && n2 <= n3) {
        smallest = n2
    } else if (n3 <= n1 && n3 <= n2) {
        smallest = n3
    }

    console.log(smallest);

}
smallestNum(25,
    21,
    4)
