function solution(s) {
  var length = s.length;
  var mid = Math.floor(length / 2);
  var answer = "";
  if (length >= 1 && length <= 100) {
    if (length % 2 === 0) {
      return s.slice(mid - 1, mid + 1);
    } else {
      console.log(s[Math.floor(length / 2)]);
      return s[Math.floor(mid)];
    }
  } else {
    return -1;
  }
}
