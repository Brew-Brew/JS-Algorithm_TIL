function findKim(seoul){
  var idx = 0;
  idx=seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));
