// Write the program, to find the max element of the array,and console it.
function max_number(number){
var max=0
for (var i=0;i<number.length;i++){
if (max<number[i]){
    max=number[i]
}
}
console.log("max",max)
}
max_number([50, 40, 23, 70, 56, 12, 5, 10, 7])
