function fibonacci(n) {

   if(n>=2){
     return fibonacci(n - 2) + fibonacci(n - 1);
   }else{
    return n;
   }

}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))
