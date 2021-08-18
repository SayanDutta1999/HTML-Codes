console.clear();

var mstr = 'hello';
var mnum = 5;
var msum = mstr + mnum;

console.log(msum);
console.log(typeof(msum)); // String

console.log('hello' + true)
console.log(typeof('hello' + true)) // String

console.log(5 + 'hola')
console.log(typeof(5 + 'hola')) // String

console.log(+ '2')
console.log(typeof(+ '2')) //Number

console.log(- '2')
console.log(typeof(- '2')) //Number

console.log(- 'apple') // Not a NUMbr
console.log(typeof(- 'apple')) //Number

// JS convert this string literal as Number and then it compares
console.log(2 >= '2') //True
console.log(typeof(2 >= '2'))  // Boolean

console.log(2 >= 2) // true
console.log(typeof(2 >= 2)) //Boolean


if (true) {
    console.log('True')
}
else
{
    console.log('False')
}

if (5) {
    console.log('True')
}
else
{
    console.log('False')
}

if (null) {
    console.log('True')
}
else
{
    console.log('False') //return false
}

if (undefined) {
    console.log('True')
}
else
{
    console.log('False') //return false
}

if ('') {
    console.log('True')
}
else
{
    console.log('False') //return false
}