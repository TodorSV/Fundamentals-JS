function solve(arr) {
    let first = arr.shift();
    let last = arr.pop();

    console.log(Number(first) + Number(last));
}
//solve(['20', '30', '40'])
function solve(arr) {
    let arr1 = [];

    for (let int of arr) {
        if (int >= 0) {
            arr1.push(int)
        } else {
            arr1.unshift(int)
        }
    }
    console.log(arr1);
}
//solve(['7', '-2', '8', '9'])

function solve(arr) {
    let k = arr.shift()

    let first = arr.slice(0, k);
    console.log(first.join(" "));
    let last = arr.slice(-k);
    console.log(last.join(" "));
}
//solve([2,7,8,9]);

function solve(n, k) {
    let result = [1];

    for (let i = 0; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let el of lastK) {
            sum += el
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}
//solve(8, 2)

function solve(arr) {
    let arr1 = [];

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];

        if (i % 2 === 1) {
            curr *= 2
            arr1.push(curr)
        }
    }
    console.log(arr1.reverse().join(" "));
}
//solve([10, 15, 20, 25])

function solve(arr) {
    let arr1 = []
    arr.sort((a, b) => a - b)
    let smallest = arr.slice(0, 2)
    console.log(smallest.join(" "));
}

//solve([30, 15, 50, 5])

function solve(arr) {

    arr.sort()
    let counter = 0;

    for (let product of arr) {
        let curr = product;
        counter++
        console.log(`${counter}.${curr}`)
    }

}
//solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])

function solve(arr) {
    let newArr = arr.shift().split(" ").map(Number)
    for(let i =0; i<arr.length;i++){
        let curr=arr[i].split(" ");
        let command=curr[0];
        let int=Number(curr[1]);
        let index=Number(curr[2]);

        if (command=="Add"){
            newArr.push(int);
        }else if(command=="Remove"){
            newArr.splice(int,1);
        }else if(command=="RemoveAt"){
            newArr.splice(int,1);
        }else if(command=="Insert"){
            newArr.splice(index, 0, int);
        }
    }
console.log(newArr.join(" "));
}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)