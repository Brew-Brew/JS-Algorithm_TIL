function gcdlcm(a, b) {
  var answer = [];
  //공약수를 걸러냄
  var commonDenominator= denominator(a).filter((value)=>{
    return denominator(b).indexOf(value) !== -1
  })
  //최대공약수
  var big=Math.max(...commonDenominator);
  console.log(big);

  //최소공배수
  var small=commonDenominator.reduce((a,b)=>{
    return a*b;
  },Math.max(a,b)/big)*Math.min(a,b/big);
  console.log(small);

    return [big,small];
}
//약수 만드는 함수
function denominator(a){
  var arr=[];
  for(let i=0;i<=a;i++){
        if(a%i===0)
      arr.push(i);
  }
  return arr;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(12,3));
