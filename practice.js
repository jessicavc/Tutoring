// write a fizzbuzz function using an array of unknown amount of numbers.
// Iterate through that array. 
// If number in that array is divisible by 3, print "fizz" to the console
// if number is divisible by 5, print "buzz"
// if divisible by 3 and 5, print "fizz buzz"
//other print the number itself

function fizzBuzz (fizzBuzzArray){
    for (var i = 0; i<fizzBuzzArray.length; i++) {
        if (fizzBuzzArray[i] % 3 == 0 && fizzBuzzArray[i]  % 5 == 0) {
            console.log("fizzbuzz");
        } else if (fizzBuzzArray[i]  % 3 == 0){
            console.log("fizz");
        } else if (fizzBuzzArray[i]  % 5 == 0){
            console.log("buzz");
        } else {
            console.log(fizzBuzzArray[i]);
        }
    }
} 

fizzBuzz([6, 7, 8, 9, 10, 11, 12, 13, 14, 15])


// given an array with unknown amount of numbers
// without using built-in function, sum the numbers in the array

function numbers(numbersArray) {
    var total = 0;
    for (var i = 0; i < numbersArray.length; i++) {
        total += numbersArray[i]; 
        return (total);
    } 
} numbers([6, 7, 8, 9, 10, 11, 12, 13, 14, 15])