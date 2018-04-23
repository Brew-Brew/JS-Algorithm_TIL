function nextSqaure(n){
  var result = 0;
  //함수를 완성하세요
  result = ((Math.sqrt(n)+"").indexOf('.'))=== -1 ? Math.pow(Math.sqrt(n)+1,2):'no'
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
