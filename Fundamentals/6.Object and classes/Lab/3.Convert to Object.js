function convert(string) {
    let obj = JSON.parse(string);

    for (let [key,value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
    }

}
convert('{"name": "George", "age": 40, "town": "Sofia"}')