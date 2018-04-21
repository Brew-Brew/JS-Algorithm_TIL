function numPY(s){
  //함수를 완성하세요
  var result = true;

  //문자열을 배열로 만들어준다.
  var arr=s.split("");

  //pArr에는 p만, yArr에는 y만 담는다
  var pArr=arr.filter((str)=> str==='p'||str==='P');
  var yArr=arr.filter((str)=> str==='y'||str==='Y');

  // p,y모두 없거나 p와 y의 갯수가 같다면 true를 리턴한다.
  if((pArr.length===0 && yArr.length===0) || (pArr.length===yArr.length)){
    return result;
  }
  else{
    return false;
  }
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pA") )
