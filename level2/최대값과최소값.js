function solution(s) {
  var arr = s.split(' ');
  var max = arr.reduce((prev, next) => Math.max(prev, next));
  var min = arr.reduce((prev, next) => Math.min(prev, next));

  return min + ' ' + max;
}
