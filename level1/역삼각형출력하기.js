function printReversedTriangle(num) {
  var result = '';
  var i,j;
    for(i=0;i<num;i++){
    for(j=0;j<num-i;j++){
    result+='*'
    }
    result+='\n'
  }

  return result
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " +'\n'+ printReversedTriangle(3));
