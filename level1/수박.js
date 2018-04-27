function waterMelon(n){
  var result ="수박"
  return ( n!==0 && ((n%2==0) ? result.repeat(n/2) : result.repeat((n-1)/2)+"수"))
  //n이 짝수라면 수박을 n/2 만큼  수박 더함
  //n이 홀수 라면 (n-1)/2 + 수
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
