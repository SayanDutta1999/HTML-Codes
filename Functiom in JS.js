console.clear()


/* Fucntion Declaration
function functionName(argument1, argument2,..........,argumentN){
    Block of code
}
*/
function msum()
{
    let num1 = 10
    let num2 = 20
    let sum = num1 + num2
    console.log(sum) 
}
msum()
//return keywprd
function msum2()
{
    let num1 = 40
    let num2 = 20
    let sum = num1 + num2
    return sum
}
let totalsum = 100 + msum2()
console.log(totalsum)

// Fucntion Argument
console.log("|-------------|")
function greeting(){
    console.log("   welcome")
}
greeting()

function greettoperson(personName){
    console.log('Welcome' + " " + personName)
}
greettoperson('Sayan')

function sumnum(num1, num2){
    console.log("Number 1 =>" + " " + num1)
    console.log("Number 2 =>" + " " + num2)
    console.log("total sum =" + " " + num1 + num2)
}

sumnum(12, 20)
sumnum(120, 200)

// Default argument

function sumnum(num1 = 10, num2 = 20, num3 = 40){
    console.log("Number 1 =>" + " " + num1)
    console.log("Number 2 =>" + " " + num2)
    console.log("Number 3 =>" + " " + num3)
    console.log("total sum =" + " " + num1 + num2 + num3)
}

sumnum()