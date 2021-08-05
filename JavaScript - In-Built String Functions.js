console.clear()
var MyFirstString = "This is a String for javascript string function"
var MySecondString = " i am a beginner"
var firstname = " Sayan"
var lastname = " Dutta"


// length function which returns length of string

console.log(MyFirstString.length)

// Find location of string inside a string

console.log(MyFirstString.indexOf('javascript'))   // indexOf function argument is case sensitive

// Find last index of a string inside a string

console.log(MyFirstString.lastIndexOf('function'))

// Get a part of a string slice(start pos, end pos) integer start to end - 1 pos
 console.log(MyFirstString.slice(0, 4))

 console.log(MyFirstString.slice(-21, -1))

 console.log(MyFirstString.slice(-9))

 // Get sub string finction - substr(startpos, length)

 console.log(MyFirstString.substr(0, 21))

 // toupperCase() - it converts our string  to Upper Case character

 console.log(MyFirstString.toUpperCase())

 // .toLowerCase() - it converts our string  to Lower Case character
 console.log(MyFirstString.toLowerCase())

 //concat() - it merges two or more strings together

 console.log(MyFirstString.concat(MySecondString))

 console.log(MyFirstString.concat(MySecondString, firstname, lastname))

// we can also use + operator to concatinate a string

console.log(MyFirstString.concat(MySecondString + firstname + lastname))

console.log(firstname + lastname)

// trims() - it removes extra spaces

var extraspace = '        sayan      '
console.log(extraspace.trim())