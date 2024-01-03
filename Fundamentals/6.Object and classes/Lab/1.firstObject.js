function firstObj(firstName, lastName, age) {

    /* c
      obj['firstName'] = firstName;
      obj['lastName'] = lastName;
      obj['age'] = age;*/
    let obj = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return obj
}
console.log(firstObj("Peter",
    "Pan",
    "20"
))