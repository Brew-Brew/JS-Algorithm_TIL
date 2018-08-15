function solution(n)
{
  var length = (n+"").length;
  var sum=0;
  for(var i=length;i>0;i--){
    let identifier = Math.floor(n/(Math.pow(10,i-1)))
    sum+= identifier
    n-= identifier*(Math.pow(10,i-1))
   }
    return sum;
}