function Harshad(n){
  var result ;
  //함수를 완성하세요
    var arr=(n+"").split("");
  var sum=arr.reduce((a,b)=> parseInt(a)+parseInt(b));
  n%sum==0? result=true:result=false;
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(18))
