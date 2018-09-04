function solution(s, n) {
    s=s.split("");
    var answer = '';
    if(s.length>8000 || n<1 || n >25){
        return -1;
    }
    answer=s.map((val)=>{
        return (
        val.charCodeAt(0)!==32 ? 
            val.charCodeAt(0)>=65 &&  val.charCodeAt(0) <=90 
            ? String.fromCharCode((val.charCodeAt(0))+ n >90
                                  ?(val.charCodeAt(0))+ n-26
                                  : (val.charCodeAt(0))+ n)
            : String.fromCharCode((val.charCodeAt(0))+ n >122 
                                  ? (val.charCodeAt(0))+ n -26
                                  :(val.charCodeAt(0))+ n )
        : String.fromCharCode(val.charCodeAt(0)));
    })
   
   return(answer.join(''));
}