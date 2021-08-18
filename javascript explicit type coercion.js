console.clear()

var mNUm = 12
// To String
console.log('-------To String-------')
console.log(typeof(String(mNUm)))
console.log(typeof(String(true)))
console.log(typeof(String(-98.10)))
console.log(typeof(String(null)))
console.log(typeof(String(undefined)))

// To Number
console.log('-------To Number-------')
console.log(typeof(Number('2')))
console.log(Number(true), typeof(Number(true)))
console.log(Number(false), typeof(Number(false)))
console.log(Number('-90.234'), typeof(Number('-90.234')))
console.log(Number('apple'), typeof(Number('apple'))) // Not a Number , type number
console.log(typeof(String(mNUm)))
console.log(typeof(String(mNUm)))

// To Boolean
console.log('-------To Boolean-------')
console.log(Boolean(true), typeof(Boolean(true)))
console.log(Boolean(1), typeof(Boolean(1)))
console.log(Boolean(false), typeof(Boolean(false)))
console.log(Boolean(0), typeof(Boolean(0)))
console.log(Boolean('Apple'), typeof(Boolean('Apple')))
console.log(Boolean(null), typeof(Boolean(null)))
console.log(Boolean(undefined), typeof(Boolean(undefined)))