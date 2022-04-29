// Q4.Write a Python program to reverse a string.
// Sample String : "1234abcd
function reverse1(sample_string){
    var array=[]
    var string=" "
    var reverse=0
    var count=0
    for (i=0;i<sample_string.length;i++){
        if (sample_string[i]!=" "){
            string+=sample_string[i]
            count++
        }
        else{
            array.push(string)
            string=""
            count++

        }
    }
    array.reverse()
    console.log(array)
    console.log("count is",count)
    
}
reverse1("1234abcd")

// function dom(string){
//     var array=[];
//     var str=" "
//     var reverse=[]
//     var count=0
//     for (i=0;i<string.length;i++){
//         if (string[i]!=" "){
//             str+=string[i]
//             // count++
//         }
//         else{
//             array.push(str)
//             str=""
//             count++
//         }
//     }
//     array.reverse()
//     console.log(array)
//     console.log("count is",count)
// }
// dom("My name is kirtee patil ")