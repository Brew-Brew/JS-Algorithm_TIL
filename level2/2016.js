function getDayName(a,b){
 var date = (new Date(`${a}/${b}/2016`)).getDay();
 var week = new Array('SUN','MON','TUE','WED','THU','FRI','SAT');
    return week[date];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));
