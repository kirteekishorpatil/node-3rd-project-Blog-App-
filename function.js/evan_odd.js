// Write a function named check_numbers which will take two numbers and check if both are even prints 
// “Both are even” else prints “Both are not even”.
function check_numbers(){
const b=require("readline-sync")
var number=b.questionInt("enter the numbers")
var number2=b.questionInt("enter the number do you want")
if (number%2==0 && number2%2==0){
    console.log(number,"both are evans",number2)
}
else{
    console.log(number,"are not evans",number2) 
}
}
check_numbers()