function solution(arr) {
  var answer = [];
  if (arr.length === 1) {
    return [-1];
  } else {
    var min = arr.reduce((prev, next) => {
      return Math.min(prev, next);
    });
    arr.splice(arr.indexOf(min), 1);

    return arr;
  }
}
