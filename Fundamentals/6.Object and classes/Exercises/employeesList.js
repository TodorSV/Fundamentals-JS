function employeesList(arr) {
    let list={};//създаваме си обект
    for (let name of arr) {//правим си цикъл който да върти през входа ни
        name.split(",");//разделяме масива на стрингове
        list.name=name;//казваме ,че името на обекта е името ,което получаваме от цикъла
        list.length=name.length;//а дължината е дължината на името
        console.log(`Name: ${name} -- Personal Number: ${name.length}`);     
    }

}
employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)