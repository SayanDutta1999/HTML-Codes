console.clear()
// Arrays use position to print element
var mFriends = ["Santanu", "Rupam", "Pritam", "Prem", "surojit"]
console.log(mFriends)
console.log(typeof(mFriends))
console.log(mFriends[0])
console.log(mFriends[1])
console.log(mFriends[2])
console.log(mFriends[3])
console.log(mFriends[4])


// Update Value

mFriends[0] = "sayan"
console.log("--------Add element at position 0--------")
console.log(mFriends)
console.log(mFriends[0])
console.log(mFriends[1])
console.log(mFriends[2])
console.log(mFriends[3])
console.log(mFriends[4])

// Add more Item

mFriends[5] = "Jit"

console.log("--------Add element at position 5--------")
console.log(mFriends)
console.log(mFriends[0])
console.log(mFriends[1])
console.log(mFriends[2])
console.log(mFriends[3])
console.log(mFriends[4])
console.log(mFriends[5])

// if we add element pos 10th 

//mFriends[10] = "Papai"

console.log("--------Add element at position 10 without knowing length of array--------")
console.log(mFriends)
console.log(mFriends[0])
console.log(mFriends[1])
console.log(mFriends[2])
console.log(mFriends[3])
console.log(mFriends[4])
console.log(mFriends[5])
//console.log(mFriends[10])



mFriends[mFriends.length] = "rob"
console.log(mFriends)


// Add element at End of the array

mFriends.push("jack")
console.log(mFriends)

// Delete a value from end
var mName = mFriends.pop()
console.log(mName)
console.log(mFriends)

// Add an element at specific position
/*
splice(start: number, deleteCount?: number): string[]
The zero-based location in the array from which to start removing elements.


Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@returns — An array containing the elements that were deleted.
*/ 
// 1st tells where to start
// 2nd tells how many items to de deleted
// 3rd and 4rd and so on tells what items to be added
console.log("--------Add element at position--------")
mFriends.splice(3, 0, 'Donna', 'Steven')
console.log(mFriends) 
mFriends.splice(0, 0, 'hello')
console.log(mFriends)  

// Add an element at specific position
console.log("--------Delete an element at position--------")
mFriends.splice(0, 1)
console.log(mFriends)  

mFriends.splice(3, 1)
console.log(mFriends)  

// Concatinate 2 arrays
console.log("---------Concatinate---------")
var mFriends2 = ["Santanu", "Rupam", "Pritam", "Prem", "surojit"]
var mallfriends = mFriends.concat(mFriends2)
console.log(mFriends)
console.log(mFriends2)
console.log(mallfriends)


/* 
reverse(): string[]
Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
*/
console.log("---------Reverse---------")
var numarr = [50, 40, 30, 20, 10]
numarr.reverse()
console.log(numarr)

// Sorting  Ascending and Descending
/*
sort(compareFn?: (a: string, b: string) => number): string[]
Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

[11,2,22,1].sort((a, b) => a - b)

Sorts an array in place. This method mutates the array and returns a reference to the same array.
*/
console.log("---------Sorting---------")

numarr.sort()
console.log(numarr)