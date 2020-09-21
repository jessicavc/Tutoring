// write function that takes in two arrays. There is one common number in both arrays. Find that commmon number
var array1 = [1, 9, 8, 7];
var array2 = [10, 12, 1, 6, 5];


function commonNumber (array1, array2) {

    //hint: each key in object should be a number in the array
    var array = {};
    for (var i = 0; i < array1.length; i++) {
        array[array1[i]] = 1;
    } 
    // iterate through array2, check each element of array2 against array object
    for (var i = 0; i < array2.length; i++) {
        if (array2[i] !== array[i]) {
            console.log ("These numbers are not in common")
        } else {
            return (i);
        }
    }
    
} commonNumber();


