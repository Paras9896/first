let leftdiv = document.getElementById('div1');
let rhtdiv = document.querySelector('.div2');
let qstform = document.getElementById('btn1');
let inptsubj = document.getElementById('subi');
let text = document.getElementById('text');
let sumt = document.getElementById('btn3');
let twrtdiv = document.querySelector('.tworgtdiv');
let question_div = document.getElementById("div7");
let th1 = document.getElementById("th1");
let tp = document.getElementById("tp");
let nmin = document.getElementById('nmin');
let text2 = document.getElementById('text2');
let div9 = document.querySelector('.div9');
let div8 = document.getElementById('div8');
let resolve_button = document.getElementById('btn5');

let que = JSON.parse(localStorage.getItem("question")) || [];
let res = JSON.parse(localStorage.getItem("answer")) || [];
// let div= JSON.parse(localStorage.getItem("dive")) || [];
let id = parseInt(localStorage.getItem("id")) || 0;

sumt.addEventListener("click", sbmt);

function sbmt() {
    
    if (inptsubj.value.trim() !== '' && text.value.trim() !== '') {
        const obj = {
            id: id,
            subject: inptsubj.value,
            txt: text.value,
            favourite: false,
        };
        id++;
        localStorage.setItem('id', id);
        que.push(obj);
        localStorage.setItem('question', JSON.stringify(que));

        let a = document.createElement('div');
        let i = document.createElement('i');
        i.className = "fa fa-heart";
        i.style.float = "right";

        a.classList.add("div3");
        a.dataset.id = obj.id;
        a.append(i);
        let h1 = document.createElement('h1');
        h1.innerHTML = inptsubj.value;
        let p = document.createElement('p');
        p.innerHTML = text.value;
        a.append(h1, p);
        leftdiv.append(a);

        inptsubj.value = "";
        text.value = "";

        a.addEventListener('click', () => show2(obj));
    } else {
        alert("Please type Something");
    }
}

qstform.addEventListener('click', show);

function show() {
    rhtdiv.classList.remove("hide");
    twrtdiv.classList.add("hide1");
}

function show2(obj) {
    twrtdiv.classList.remove("hide1");
    rhtdiv.classList.add("hide");

    question_div.innerHTML = '';
    div8.innerHTML = '';

    th1.innerHTML = obj.subject;
    tp.innerHTML = obj.txt;
    question_div.append(th1, tp);
    div9.classList.remove('div9');
    let responses = res.filter(ele => ele.name === obj.subject);
    responses.forEach(ele => {
        let like = document.createElement('button');
        let dislike = document.createElement('button');
        let div10 = document.createElement('div');
        div10.classList.add("insidediv");
        let h3 = document.createElement('h2');
        h3.innerHTML = ele.user;
        let pre = document.createElement('h3');
        pre.innerHTML = ele.ans;
        div10.append(h3, pre, like, dislike);
        div8.append(div10);
        div8.id="div8"
        like.innerHTML = `like${ele.like}`;
        dislike.innerHTML = `dislike${ele.dislike}`;
        like.onclick = () => like_count(ele, like);
        dislike.onclick = () => dislike_count(ele, dislike);
    });

    nmin.value = "";
    text2.value = "";
    resolve_button.onclick = () => delet(obj);
    let tbtn = document.getElementById('btn4');
    tbtn.onclick = () => dis(obj);
}

function delet(obj) {
    let indx = que.findIndex(el => el.subject == obj.subject && el.txt == obj.txt && el.id == obj.id);

    if (indx !== -1) {
        que.splice(indx, 1);
        console.log(indx);
        localStorage.setItem('question', JSON.stringify(que));

        let listElements = leftdiv.querySelectorAll('.div3');
        console.log(listElements);
        listElements[indx].remove();
         twrtdiv.classList.add("hide1");
    }
}


function dis(obj) {
    if(nmin.value.trim() !=="" && text2.value.trim() !==""){
        const ans = {
            like: 0,
            dislike:0,
            user: nmin.value,
            ans: text2.value,
            name: obj.subject,
        };
        res.push(ans);
        localStorage.setItem("answer", JSON.stringify(res));

        let like=document.createElement('button');
        let dislike=document.createElement('button');
        div9.classList.remove('div9');
        let div10 = document.createElement('div');
        div10.classList.add("insidediv");

        div10.style.display = 'block';

        // res.push(div10);
        // localStorage.setItem('dive', JSON.stringify(res));


        let h3 = document.createElement('h2');
        h3.innerHTML = ans.user;
        let pre = document.createElement('h3');
        pre.innerHTML = ans.ans;
        like.innerHTML="like";
        dislike.innerHTML="dislike";
        like.id="like";
        dislike.id="dislike";
        div10.append(h3, pre,like,dislike);
        div8.append(div10);
        like.addEventListener("click",likeclick);
        dislike.addEventListener("click",dislikeclick);
        function likeclick(){
           like_count(ans,like);
        }
        function dislikeclick(){
            dislike_count(ans,dislike);
        }
        
    
    
        nmin.value = "";
        text2.value = "";
    }
   else{
    alert("Please enter response");
   }
    
}
function like_count(resp,like){
    resp.like+=1;
    like.innerHTML=`like${resp.like}`;
    let indx=res.findIndex(el=>el.user==resp.user);
    res[indx]=resp;
    localStorage.setItem("answer", JSON.stringify(res));
}
function dislike_count(resp,dislike){
    resp.dislike+=1;
    dislike.innerHTML=`dislike${resp.dislike}`;
    let indx=res.findIndex(el=>el.user==resp.user);
    res[indx]=resp;
    localStorage.setItem("answer", JSON.stringify(res));
}

window.onload = () => {
    que.forEach(ele => {
        let a = document.createElement('div');
        a.classList.add("div3");
        a.dataset.id = ele.id; 
        let h1 = document.createElement('h1');
        h1.innerHTML = ele.subject;
        let p = document.createElement('p');
        p.innerHTML = ele.txt;
        a.append(h1, p);
        leftdiv.append(a);
        
        a.addEventListener('click', () => show2(ele));
        resolve_button.onclick=()=> delet(data);
    });
};

