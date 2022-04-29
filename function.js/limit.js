// Write a function named showNumbers() which takes 1 argument named limit and program starts 
// from o to limit and checks the numbers in between 0 
// to limit and prints whether the number is Even or odd like the below.
function showNumbers(limit){
for (var i=0;i<=limit;i++){
if (i%2==0){
    console.log(i,"number is even")
}
else{
    console.log(i,"number is odd")
}
}
}
showNumbers(8)