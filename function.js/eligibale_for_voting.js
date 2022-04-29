// Write a function named eligibleforvote which takes age as a parameter and prints if he/she is eligible to vote or not.
// ( Consider minimum age of voting to be 18. )
// Example:
// If a user given age as less than 18 prints “not eligible “ or else if a user enters 18 or more than 18 prints “you are eligible”.
function age(){
const b=require("readline-sync")
var number=b.questionInt("enter the number")
if (number>18){
    console.log(number," age eligible for voting")
}
else if (number<18){
    console.log(number,"age is not eligible for voting")
}
}
age()