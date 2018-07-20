function solution(arr, divisor) {
    const filteredArr= arr.filter((val)=>(val/divisor+"").indexOf(".")===-1);
   return (filteredArr.length!==0)?filteredArr.sort(function(a, b) {
  return a - b;
}):[-1];
}