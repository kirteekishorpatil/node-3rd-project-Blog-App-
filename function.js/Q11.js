// Q3.Write a Python function to sum all the numbers in a list.
// Sample_List=[8, 2, 3, 0, 7]
function sum(sample_list){
    var total=0
    for (var i of sample_list){
        total=total+i
    }
    console.log(total)
}
sum([8, 2, 3, 0, 7])