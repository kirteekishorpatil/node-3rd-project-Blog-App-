// Write a function named checknumberslist which takes two lists of integers and checks the numbers of the same 
// index numbers whether they
// both are even or not. For checking both even or not you can use the function written in the previous question.
// If you give these lists [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] then the output should come like this.
    
    function add_numbers_list(list1,list2){
    for(var i=0;i<list1.length;i++){
        if (list1[i]%2==0 && list2[i]%2==0){
            console.log(list1[i],"both are evens",list2[i])
        }
        else{
            console.log(list1[i],"both are not evens",list2[i])
        }
        
            
    }
    }
    
    add_numbers_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])