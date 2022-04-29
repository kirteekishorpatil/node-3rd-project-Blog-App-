// Write a function named multiplesOfNumbers which takes an argument as limit, and runs a loop from o to that limit and 
// prints the multiples of 3 and 5. Like the below.
function multiplesOfNumbers(limit){
var sum=0
for (var i=0;i<=limit;i++){
if (i%3==0){
sum+=i
}
    
if (i%5==0){
sum+=i
}
}
console.log(sum)
}
multiplesOfNumbers(10)