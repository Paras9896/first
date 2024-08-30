let btn=document.getElementById('sinbutton');
btn.addEventListener("click",show);

function show(){

    let xhr=new XMLHttpRequest();
    xhr.open("GET","/signin.html");
    xhr.send();
    xhr.onload=()=>{
       alert("signin");
       window.location.href='/signin.html';
    }
}

let btn2=document.getElementById('supbutton');
btn2.addEventListener("click",show2);
function show2(){
    let xhr2=new XMLHttpRequest();
    xhr2.open("GET","/signup.html");
    xhr2.send();
    xhr2.onload=()=>{
        alert("signup");
        window.location.href='/signup.html';
    }

}
