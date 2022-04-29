// Write a program to reverse the element of the array.
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var rev=[]
for (var i=numbers.length-1;i>=0;i--){
    rev.push(numbers[i])
}
console.log(rev)