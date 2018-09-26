function solution(limit) {
    var primes = [];
    var bools = new Array(limit -1).fill(true);
    // 배열의 index 0은 숫자 2를 대신하고 index 1은 숫자 3, index 2는 4를...
    
    for(var i = 2; i < limit; i++) {
      if(bools[i-2]) {
        for(var j = i*2; j <= limit; j += i) {
          bools[j -2 ] = false;
        }
      }
    } 
    // 1은 소수가 아니기 때문에 반복문을 2부터 시작해 합성수의 값을 false로 변경함.
    
    for(var v = 0; v < bools.length; v++) {
      if(bools[v]) { primes.push(v + 2)};
    }
    // 소수로 남아있는 bools 배열의 요소만 취해, 소수만의 배열을 생성함.
  
    return primes.length;
  }