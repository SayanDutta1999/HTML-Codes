console.clear();
// JS includes 2 types of numbers 1. Infinity,  2. Not a Number
var num1 = 2;    // Integer
var num2 = 10.5; // Decimal number

console.log(typeof(num1));
console.log(typeof(num2));

var num3 = 15

var sum = num1 + num3 +num2
console.log(sum)

// Substraction
var sub= num1 - num3 - num2
console.log(sub)

// Multiplication
var mul= num1 * num3 * num2
console.log(mul)

// Division

var div= num1 / num3 / num2
console.log(div)

// Infinity
var divbyzero= num1 / 0
console.log(divbyzero)
console.log(typeof(divbyzero))

// Not a Number (NaN)

var mulbystr = num2 * "sayan"
console.log(mulbystr)
console.log(typeof(mulbystr))

console.log(0 / 0)      // (NaN)
console.log(0 / 5)     // Number
console.log(3 * 'a')  // (NaN)
console.log('a' * 3) // (NaN)
console.log('b' + 4) //string
console.log(typeof('b' + 4)) //string
console.log(4 + 'b') //string
console.log(5 - 'c') //(NaN)
console.log('c' - 5) //(NaN)



