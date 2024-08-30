let signin= document.getElementById('sinbutton');
let signup=document.getElementById('supbutton');

signin.addEventListener("click",show1);
function show1(){
    let xhr=new XMLHttpRequest();
    xhr.open("GET","/signin.html");
    xhr.send();
    xhr.onload=()=>{
        alert('signin');
        window.location.href="/signin.html";
    }
}