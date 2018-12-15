function solution(n) {
    if(n>10000000000){
        return;
    }
    var answer =(n+"").split('');
    return answer.map((str,index)=> parseInt(answer[answer.length-index-1]));
}