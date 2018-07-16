function solution(arr)
{
    var result= arr.filter(function(val,index,arr2){
        if(arr2[index] !== arr2[index+1]){
         return val || val===0;
        }
    });
return result;
}