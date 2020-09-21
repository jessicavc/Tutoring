// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value

let linear = function () {
    let length = 14
    var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514]
    var random_value = stuff[Math.floor(Math.random() * length)]
}

for (let i = 0; i < stuff.length; i++) {
    if (stuff[i] === randomValue) {
        return (i + " : " + randomValue);

    }
}

linear()