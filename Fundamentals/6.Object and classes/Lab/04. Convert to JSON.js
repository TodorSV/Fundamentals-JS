function convertToJson(name, lastName, hairColor) {
    let obj = {}
    obj['name'] = name;
    obj['lastName'] = lastName;
    obj['hairColor'] = hairColor;

    let text= JSON.stringify(obj);
    console.log(text);
}
convertToJson('George', 'Jones', 'Brown')