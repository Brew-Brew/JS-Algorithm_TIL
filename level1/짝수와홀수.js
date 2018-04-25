function evenOrOdd(num) {
  var result = ''
  // 함수를 완성하세요
  num%2===0 ? result='Even':result='Odd'
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
