console.clear()
var num1 = 10
var num2 = 29.56

// tostring() take numbers as argument and returns a string

console.log(num1.toString())
console.log(typeof(num1.toString()))

console.log(num2.toString())
console.log(typeof(num2.toString()))

// parseInt() which takes string numeral as input and returns a number.
var strNUm1 = "10"
var strNUm2 = "10.21"
var strNum3 = "Sayan"

console.log(parseInt(strNUm1))
console.log(typeof(parseInt(strNUm1)))

console.log(parseInt(strNUm2))
console.log(typeof(parseInt(strNUm2)))

console.log(parseInt(strNum3)) //Not a Number
console.log(typeof(parseInt(strNum3)))  //Number


// parseFloat() which takes string  numeral as input and returns a Float number.

console.log(parseFloat(strNUm2))
console.log(typeof(parseFloat(strNUm2)))

console.log(parseFloat(strNum3)) //Not a Number
console.log(typeof(parseFloat(strNum3)))  //Number

// toFixed()  takes Floating number and rounds if off to given position.

var strfloat = 54.4654

console.log(strfloat.toFixed())
console.log(strfloat.toFixed(2)) // toFixed argument as 2 which represent how many step it take after decimal.
console.log(typeof(strfloat.toFixed()))


