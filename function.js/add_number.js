// Write a function named addnumberslist which takes two lists as arguments and adds the same position numbers and prints the sum of them.
// You can use the add_numbers function to add two numbers.
// If we have [50, 60, 10] and [10, 20, 13] and prints output like this.
function add_numbers(num1,num2){
    console.log(num1+num2);
    console.log("------------");
    }
    
    function add_numbers_list(list1,list2){
    for(var i=0;i<3;i++){
    add_numbers(list1[i],list2[i]);
    }
    }
    
    add_numbers_list([50, 60, 10],[10, 20, 13])