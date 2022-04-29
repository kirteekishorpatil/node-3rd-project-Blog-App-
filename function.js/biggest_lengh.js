// Write a function that takes 2 strings as parameters and prints whose 
// length is bigger, if both lengths are equal print two strings.
function is_equal_lenth(){
var b=require("readline-sync")
var str1=b.question("enter the str1")
var str2=b.question("enter the str2")
if(str1.length === str2.length){
console.log(str1,"and",str2,"is equal");
}
else if(str1.length > str2.length){
console.log(str1,"is gretest");
}
else{
console.log(str2);
}
}

is_equal_lenth();

