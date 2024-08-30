let express=require("express");
let app=express();
app.get("/",(req,res)=>{
 res.sendFile(__dirname+"/ajaxexpress.js");
})
app.listen(3000,()=>{
    console.log("hello");
})