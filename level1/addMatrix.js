function sumMatrix(A,B){
  let i=0;
  let j=0;
  let answer = Array();
  for(i=0;i<A.length;i++){
    answer[i]=[];
  	for(j=0;j<A[i].length;j++){
      answer[i].push((A[i][j]+B[i][j]));
    }
  }
  // A[0][0]+B[0][0]
  // A[0][1]+B[0][1]
  // A[1][0]+B[1][0]
  // A[1][1]+B[1][1]
	console.log(answer);

	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2,], [2,3],[3,4]], [[3,4],[5,6],[4,5]]))
