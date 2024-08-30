let lapbutton=document.getElementById('lap');
let startbutton=document.getElementById('start');
let first=document.getElementById('first');
let secondd=document.getElementById('secondd');
let third=document.getElementById('third');
let forth=document.getElementById('forth');
let laptime=document.getElementById('laptime');
let reset=document.getElementById('reset');
let milisecond=0;
let second=0;
let minute=0;
let hour=0;

startbutton.addEventListener("click",changetext);
let flag=1;
function changetext(){
    if(flag==1){
        startbutton.innerHTML="Stop";
        flag=0;
        a=setInterval(time,10);
    }
    else{
       
        startbutton.innerHTML="Start";
        flag=1;
        clearInterval(a);
       
    }
}
function time(){
    milisecond++;
    forth.innerHTML=milisecond%100;
    if(milisecond>=100){
        second++;
        milisecond=0;
        third.innerHTML=second%60;
    }
    if(second>=60){
        minute++;
        second=0;
        secondd.innerHTML=minute%60;
    }
    if(minute>=60){
        hour++;
        minute=0;
        first.innerHTML=hour;
    }
}

function set(){
    let div=document.createElement('div');
    div.id="f";
    div.innerHTML=first.innerHTML+":"+secondd.innerHTML+":"+third.innerHTML+":"+forth.innerHTML;
    laptime.append(div);
    
}
lapbutton.addEventListener("click",set);

function resett(){
    window.location.reload();
}
reset.addEventListener("click",resett);


