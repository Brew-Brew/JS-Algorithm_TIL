function solution(n) {
    if(n>10000|| n<0){
        return -1;
    }
    var sum=0;
    var answer=0;
    for(var j=1;j<n;j++){
        for(var i=j;i<=n;i++){
            sum+=i;
            if(sum===n){
                answer+=1;
        }
     }
        sum=0;
   }
    return answer+1;
}