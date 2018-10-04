
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
function solution(n) {
    if(n>10000|| n<0){
        return -1;
    }
    var sum=0;
    var answer=0;
    for(var j=1;j<=Math.floor(n/2);j++){
        for(var i=j;i<=n;i++){
            sum+=i;
            if(sum===n){
                answer+=1;
            }else if(sum>n){
                break;
            }
     }
        sum=0;
   }
    return answer+1;
}