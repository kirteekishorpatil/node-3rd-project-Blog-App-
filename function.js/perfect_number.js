// Write a function named perfect() which takes 1 parameter and checks that given parameter is a perfect number or not. 
// Perfect number means we will count the factors of a given number including 1 but you need to exclude the own number as its factor.
// If it is a perfect number prints num is a perfect number hai or else prints num is not a perfect number hain.
function perfect(){
const b=require("readline-sync")
var number=b.questionInt("enter the number")
var i=0
var sum=0
while (i<=number.lentgh){
    if (number%i==0){
        sum+=i
    }
}
if (sum==number){
    console.log(number,"is perfect number")
}
else {
    console.log(number,"is not perfect number")
}
i++
}
perfect()

