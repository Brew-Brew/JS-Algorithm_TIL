function collatz(num,cnt=0) {
    var answer = 0;
  console.log('횟수',cnt);
 // console.log('결과',num);
  if(cnt<500){
      if(num !== 1 ){
        if(num%2===0){
          num=num/2;
           cnt++;
          return collatz(num,cnt);
        }
        else{
          num=num*3+1;
           cnt++;
          return collatz(num,cnt);
        }

    }else{
      return cnt;
    }
  }else{
    return -1;
    }
  }


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(collatz(6));
