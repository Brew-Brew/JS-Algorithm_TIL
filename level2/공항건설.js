function solution(cities) {
    let temp=[];
    let sum=0;
    let result=0;
    // cities.forEach((val,index)=>{
    //     //index가 공항의 위치가 될듯
    //     console.log(val[1]*Math.abs(val[0][0]-index));
    // })
    for(let i=0;i<cities.length;i++){
        for(let j=0;j<cities.length;j++){
           sum+=(cities[j][1]*Math.abs(cities[i][0]-cities[j][0]))
        }
        temp.push([i,sum]);
        sum=0;
    }

    result=temp.sort((a,b)=>{
        return a[1]-b[1];
    })
    console.log('결과',result);
    return result[0][0];
}

console.log(solution([[1,5],[2,3],[3,3]]));
