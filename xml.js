let btn=document.getElementById('btn');
btn.addEventListener("click",start);
function start(){
    let hometxt=new XMLHttpRequest();
    hometxt.open("POST","https://jsonplaceholder.typicode.com/posts");
    hometxt.send(JSON.stringify({
        Name:"Paras",
        Userid:"1234",
    }));
    hometxt.onreadystatechange=()=>{
    console.log("Hello Everyone");
    if(hometxt.readyState===4){
        console.log(hometxt.responseText);
    }

} 
}
