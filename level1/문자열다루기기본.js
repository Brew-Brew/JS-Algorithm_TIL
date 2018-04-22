function alpha_string46(s){
  var result = true
  // 함수를 완성하세요
    return ((s.length===4||s.length===6) && s.replace(/[^0-9]/g,"").length === s.length
    ? result : false);
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("347774") );
