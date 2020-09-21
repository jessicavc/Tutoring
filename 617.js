// function that counts all consonants in a string

function cons(consString) {
    var consCount = 0;
    var consString = consString.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u"]

    for (var i = 0; i < consString.length; i++) {
        if (vowels.indexOf(consString[i]) === -1) {
            consCount++;

        } 
        
    } return consCount;
}

console.log(cons("abcdEfghIjklmnopqrstuvwxyz"));