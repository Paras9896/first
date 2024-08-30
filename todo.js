let text = document.getElementById('text');
let buttonclick= document.getElementById('btnclick');
let leftdiv=document.getElementById('leftdiv');

// let deletebutton=document.getElementById('deletebtn');
// let leftunddiv=document.createElement('div');


buttonclick.addEventListener("click",showleft);
function showleft(){
    let leftunddiv=document.createElement('div');
    let p=document.createElement('p');
    let btn=document.createElement('button');
    btn.id="deletebtn";
    btn.textContent="DELETE"
    leftunddiv.id="leftunderdiv";
    leftdiv.append(leftunddiv);
    leftunddiv.append(p);
    leftunddiv.append(btn)
    p.innerHTML=text.value;
    

}
btn.addEventListener("click",deleteitem);
function deleteitem(){
    leftunddiv.remove();
   
}
