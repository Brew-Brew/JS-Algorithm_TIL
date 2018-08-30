function solution(n) {
    var divider=0;
    var result=0;
    if(n<2 || n>1000000){
        return -1;
    }
    for(var i=2;i<=n;i++){
        for(var j=2;j<=i;j++){
            if(i%j==0){
                divider+=1;
            }
        }
        if(divider===1){
            result+=1;
        }
        divider=0;
    }
    return(result)
}