var btn_start, btn_stop, t, m, sp, h, miller, s, ms, HoursMiller, DaysMiler, MonthsMiller, YearsMiller;

window.onload = function(){
    btn_start = document.getElementById('start');
    btn_reset = document.getElementById('reset');
    sp = document.getElementsByTagName('span');
    miller;
    h = 0;
    m=0;
    s=0;
    ms=0;
    HoursMiller = 0;
    DaysMiler = 0;
    MonthsMiller= 0;
    YearsMiller = 0;
}



function chrono(){
    ms += 1;
    

    if(ms==10){
        ms = 1;
        s+=1;
    }
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        m=0;
        h++;
    }
    sp[0].innerHTML= h + "H";
    sp[1].innerHTML=m + "Mins";
    sp[2].innerHTML=s + "Sec";
    sp[3].innerHTML=ms + "Ms";
}

function start(){
    t= setInterval(chrono,100);
    btn_start.disabled = true;
}

function chronoMiller(){
    HoursMiller += 1;
    

    if(HoursMiller==24){
        HoursMiller = 0;
        DaysMiler+=1;
    }
    if(DaysMiler==31){
        DaysMiler=1;
        MonthsMiller++;
    }
    if(MonthsMiller==12){
        MonthsMiller=0;
        YearsMiller++;
    }
    sp[5].innerHTML=YearsMiller +  "Y";
    sp[6].innerHTML=MonthsMiller + "Months";
    sp[7].innerHTML=DaysMiler + "Days";
    sp[8].innerHTML=HoursMiller + "H";
}

function startMiller(){
    miller= setInterval(chronoMiller,58.8235294117647);
    btn_start.disabled = true;
} 

function stop(){
    clearInterval(t);
    clearInterval(miller);
    btn_start.disabled = false;
}

function reset(){
    clearInterval(t);
    clearInterval(miller);
    btn_start.disabled = false;
    h = 0;    m=0;    s=0;    ms=0;
    YearsMiller=0; MonthsMiller=0;DaysMiler=0;HoursMiller=0;
    sp[0].innerHTML= h + "H";
    sp[1].innerHTML=m + "Min";
    sp[2].innerHTML=s + "Sec";
    sp[3].innerHTML=ms + "Ms";
    sp[5].innerHTML=YearsMiller +  "Y";
    sp[6].innerHTML=MonthsMiller + "Month";
    sp[7].innerHTML=DaysMiler + "Day";
    sp[8].innerHTML=HoursMiller + "H";

}