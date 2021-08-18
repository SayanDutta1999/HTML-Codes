console.clear()

// // Creating a Object in JS
// // A onject is a collection of key value pair and closed in Second brakkets
// var mCars = {"p1" : "350 kmph", 
// "Gallardo" : "320 kmph", 
// "Veyron" : "409 kmph"};

// console.log(mCars)
// console.log(typeof(mCars))

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };
// console.log(person)
// console.log(typeof(person))

var mAgera = {
    name: "Agera",
    manufacturer: {
        name: "Koenigsegg",
        loaction: "Sweden"
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function() {
        setTimeout(function(){
            console.log('Car Stopped')
        }, 5000)
    }
}
console.log(mAgera.name)
console.log(mAgera.topSpeed)
console.log(mAgera.manufacturer)
console.log(mAgera.manufacturer.name)
console.log(mAgera.applyBrakes())  // to call a function inside a object we need to use these parenthisis 

console.log(mAgera.applyBrakes) // this give us definition og that function