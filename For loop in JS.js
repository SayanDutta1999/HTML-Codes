console.clear()
var arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    console.log('position =>' + i +" "+ 'value =>' + arr[i ])
    
}
// break keyword
console.log("--------------------")
var pos;
for(pos = 0; pos < arr.length; pos++)
{
    if(pos >= 3) break
    console.log('position =>' + pos +" "+ 'value =>' + arr[pos])
}

// Continue keyword
console.log("--------------------")
for(pos = 0; pos < arr.length; pos++)
{
    if(pos%2 != 0) continue
    console.log('position =>' + pos +" "+ 'value =>' + arr[pos])
}

console.log("--------------------")
for(pos = 0; pos < arr.length; pos++)
{
    if(pos%2 == 0) continue
    console.log('position =>' + pos +" "+ 'value =>' + arr[pos])
}