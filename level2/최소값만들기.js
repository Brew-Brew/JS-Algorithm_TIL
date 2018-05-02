function getMinSum(A,B,sum=0){
    var answer = 0;
  if(A.length!==0 && B.length!==0 ){
    var min=Math.min.apply(null,A)
    var max=Math.max.apply(null,B)
    sum+=(min*max);
    A.splice(A.indexOf(min),1);
    B.splice(B.indexOf(max),1);
    return getMinSum(A,B,sum);
  }
  else{
        return sum;
  }
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = [1,2],
    tB = [3,4];

console.log(getMinSum(tA,tB));
