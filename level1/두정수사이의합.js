function solution(a, b) {
  var answer = 0;
  if (a <= -10000000 && a >= 10000000 && (b <= 10000000 && b >= 10000000))
    return -1;
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}
