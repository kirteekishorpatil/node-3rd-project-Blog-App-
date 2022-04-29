// Write a program to check the second max of the array, and console it.
function second_maximum(number){
var max=0
var second_max=0
for (var i=0;i<number.lentgh;i++){
    if (max<number[i]){
        if (second_max<max){
            second_max=max
        }
        max=number[i]
    }
    else{
        if(second_max<number[i]){
            second_max=number[i]
        }
    }
}
console.log(second_max,"second_max")
}
second_maximum([50, 40, 23, 70, 56, 12, 5, 10, 7])



