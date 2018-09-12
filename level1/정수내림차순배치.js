function solution(n) {
    var arr= (n+"").split("");
    var result=arr.sort((a,b)=>{
        return b-a;
    })
    return parseInt(result.join(""));
}