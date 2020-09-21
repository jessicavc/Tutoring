//write a function that takes in a string and returns a string in camel case

function camelCase(str) {
    str = str.toLowercase().split(" ");

    for (i = 0; str.length > i; i++) {
       var word = str[i]
        if (i > 0) {
            word = word[i][0].toUppercase() + word.slice(1, -1)
        } return (str.join(""));

    }

    // "//this
    // //is --> Is
    // //blah --> Blah
    // //blah --> Blah"

}