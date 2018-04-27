function hide_numbers(s){
  var result=(s.split("").reverse()).map((value,index)=>{
    if(index>3){
        return "*";
    }else{
        return value;
    }
  })
  return result.reverse().toString().replace(/\,/g,'');
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));
