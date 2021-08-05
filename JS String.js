console.clear()
var MyFirstString = "I am a Student"

console.log(MyFirstString)
console.log(typeof(MyFirstString))

console.log(parseInt(MyFirstString))
console.log(typeof(parseInt(MyFirstString)))

console.log(parseFloat(MyFirstString))
console.log(typeof(parseFloat(MyFirstString)))

// what if my string contain a double quote

var doubleQuotesString = "this is \"javascript\" string"    // to resolve this error we use backslash
console.log(doubleQuotesString)

// what if my string contain a single quote
var singleQuotesString = 'this is \'javascript\' string'    // to resolve this error we use backslash
console.log(singleQuotesString)


var doubleQuotesString2 = "this is 'javascript' string"    // this give 0 errors
console.log(doubleQuotesString2)

var singleQuotesString2 = 'this is "javascript" string'    // this give 0 errors
console.log(singleQuotesString2)


