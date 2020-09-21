//write a function called "Is it numeric"
// we want to find out if character is a number
//can only contain numeric characters
//can only be maximum of one decimal placed anyway
//can only be one + or - in the string

var IsItNumeric = {
    0:0,
    1:1,
    2:2, 
    3:3, 
    4:4, 
    5:5, 
    6:6, 
    7:7,
    8:8, 
    9:9,

};

function checkNumeric (numString) {
    for (var i = 0; i < numString.length; i++) {
        IsItNumeric[numString[i]]; 
        if (!IsItNumeric[i]) {
            return ("This is not numeric");
        }
    }
}
