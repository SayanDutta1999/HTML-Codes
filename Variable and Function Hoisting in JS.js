console.clear()
/* 
Hoisting :- This mechanism where variables and 
functions can be used before declaring 
them is called Hoisting in Javascript.
*/
/*
Code Execution :- The variables and function declarations are moved to
the top of their scope before code execution.

JavaScript has two steps in execution a particular script.
step-1: Creation
step-2: Execution
*/
num1 = 10
console.log(num1)
var num1;

str1 = 'sayan dutta'
console.log(str1)
var str1;

// Function Hoisting

sum(10, 67)
sum(78, 32)
function sum(num1, num2){
    console.log(num1 + num2)
}

sum(89, 54)
console.log("-------------")
// sum2(10, 67)
// sum2(78, 32)
var sum2 = function(num1, num2){
    total = num1 + num2
    var total // variable hoisting in behind the script variable as var total = undefine
    console.log(num1 + num2)
}

sum2(89, 54)