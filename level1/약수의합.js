function sumDivisor(num) {
  let sum = 0;
    for ( let i = 1; i <= num; i++ ) {
      if ( num % i == 0 ) {
        sum += i
    }
  }
  return sum
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));
