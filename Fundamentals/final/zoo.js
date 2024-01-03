function zoo(input) {
    let animals = {};
    let areas = {};
    let line = input.shift();
    while (line !== 'EndDay') {
        
        let curr = line.split(":")
        let command = curr[0];
        let nameArr = curr[1].split("-");
        let name = nameArr[0];
        let limit = Number(nameArr[1]);
        let area = nameArr[2]
        if (command === 'Add') {
            if (!animals.hasOwnProperty(name)) {
                animals[name] = 0
                if (!areas.hasOwnProperty(area)) {
                    areas[area] = 0;
                }
                areas[area] += 1;
                
            }
            animals[name] += +limit;
         
        } else if (command === 'Feed') {
            if (animals.hasOwnProperty(name)) {
                animals[name] -= +limit;
                if (animals[name] <= 0) {
                    console.log(`${name} was successfully fed`);
                  
                    delete animals[name];
                
                   
                }
                
            }
            areas[area]-=1;
        }

        line = input.shift();
    }

    let sortedAnimals = Object.entries(animals).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]);
    });

    console.log('Animals:');
    sortedAnimals.forEach(line => {
        console.log(`${line[0]} -> ${line[1]}g`);
    });

    let sortedAreas = Object.entries(areas).filter(el => el[1] > 0).sort((a, b) => {
        return b[1] - a[1];
    });

    console.log('Areas with hungry animals:');
    sortedAreas.forEach(area => {
        console.log(`${area[0]} : ${area[1]}`);
    });
}


zoo(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])
