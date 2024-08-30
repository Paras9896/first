let compilebutton=document.getElementById('compilebutton');
let outputdiv=document.getElementById('outputdiv');
let codetxt=document.getElementById('codetxt');
let intr;

compilebutton.addEventListener("click",showoutput);


function showoutput(){
    outputdiv.innerHTML="";
    if(outputdiv.innerHTML==""){
        compilebutton.disabled= true;
    }

    // if (codetxt.value.trim()=="") {
    //     alert("Error: Spaces are not allowed!");
    //     compilebutton.disabled=false;    }
    if(codetxt.value!=""){
    let selectlang=document.querySelector('select').value;
    console.log("hy");
    let outputtxt=new XMLHttpRequest();
    outputtxt.open("POST","https://course.codequotient.com/api/executeCode");
    outputtxt.setRequestHeader("Content-type","application/json")
    let obj1=JSON.stringify({
        "code":codetxt.value.trim(),
        "langId":selectlang,
    });
    outputtxt.send(obj1);
    outputtxt.onreadystatechange=function(){
        if(outputtxt.readyState==4 && outputtxt.status==200){
            let obj=JSON.parse(outputtxt.responseText);
            console.log(obj)
            if(obj.hasOwnProperty("codeId"))
        {
            intr=setInterval(()=>{
                response(obj.codeId);
            },1000);
            console.log(outputtxt.responseText);
        }
        else{
            console.log(obj1);
            outputdiv.innerHTML=obj.error;
            compilebutton.disabled= false;
        }

        }
    }  
}

    else{
        
        alert("Please enter some code");
        compilebutton.disabled= false;
    }


    
   
}
let response= function(codeId)
{
            let xh= new XMLHttpRequest;
            xh.open("GET",`https://course.codequotient.com/api/codeResult/${codeId}`);
            xh.send();
            xh.onreadystatechange=function(){
                if(xh.readyState==4 && xh.status==200){
                    let out =JSON.parse(xh.response);
                    let data=JSON.parse(out.data);
                    
                    
                    if(data.hasOwnProperty("output")){
                        printt(data);
                        console.log(data);
                    }
                }
            };

};

let printt=(data)=>{
    
        console.log(data);

        if(data.output != "" && data.errors==''){
            console.log(data.output);
            outputdiv.innerHTML= data.output;
            compilebutton.disabled= false;
        }
        else{
            console.log(data.errors)
                outputdiv.innerHTML=data.errors+"jhg";
                compilebutton.disabled= false;
            
        }
        clearInterval(intr)
};