const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readFile("./signin&up.html","utf-8",(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                res.writeHead(200,{"content-type":"text/html"})
                res.write(data);
                res.end();
            }
        })
    }
    else{
        if(req.url=="/signin.html"){
            fs.readFile("./signin.html","utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200,{"content-type":"text/html"})
                    res.end(data);
                }
            })
        }
        else{
            if(req.url=="/signup.html"){
                fs.readFile("./signup.html","utf-8",(err,data)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.writeHead(200,{"content-type":"text/html"})
                        res.end(data);
                    }
                })
            }
            else{
                if(req.url=="/ajax.js"){
                    fs.readFile("./ajax.js","utf-8",(err,data)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            res.writeHead(200,{"content-type":"text/js"})
                            res.end(data);
                        }
                    })
                }
                else{
                    if(req.url=="/signin&up.css"){
                        fs.readFile("./signin&up.css","utf-8",(err,data)=>{
                            if(err){
                                console.log(err);
                            }
                            else{
                                res.writeHead(200,{"content-type":"text/css"})
                                res.end(data);
                            }
                        })
                    }
                    else{
                        if(req.url=="/todo.html"){
                            fs.readFile("./todo.html","utf-8",(err,data)=>{
                                if(err){
                                    console.log(err);
                                }
                                else{
                                    res.writeHead(200,{"content-type":"text/html"})
                                    res.end(data);
                                }
                            })
                        }
                        else{
                            if(req.url=="/todo.css"){
                                fs.readFile("./todo.css","utf-8",(err,data)=>{
                                    if(err){
                                        console.log(err);
                                    }
                                    else{
                                        res.writeHead(200,{"content-type":"text/css"})
                                        res.end(data);
                                    }
                                })
                            }
                            else{
                                if(req.url=="/todo.js"){
                                    fs.readFile("./todo.js","utf-8",(err,data)=>{
                                        if(err){
                                            console.log(err);
                                        }
                                        else{
                                            res.writeHead(200,{"content-type":"text/js"})
                                            res.end(data);
                                        }
                                    })
                                }
                                else if(req.url=="/file2"){
                                    console.log("hello1");
                                    write1(req,res);
                                }
                                else{
                                    if(req.url=="/file"){
                                        console.log("hello");
                                        write(req,res);
                                    }
                                }
                            }
                        }
                    }
                }
                    
            }
        }
    }
})
function write(req,res){
    let body='';
    req.on('data',(chunk)=>{
        body+=chunk;
    })
    req.on('end',()=>{  
        let arr=[];

        fs.readFile('dataBase.txt','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }
            

        let dataToStore = JSON.parse(body);
        if(!data)
        arr.push(dataToStore);
    else{
        data=JSON.parse(data);
        data.forEach(element => {
            arr.push(element)
        });
        arr.push(dataToStore);
    }

        fs.writeFile('dataBase.txt',JSON.stringify(arr),(err)=>{
            if(err){
                console.log(err);
            }
            else{  
                console.log
                res.writeHead(200,{"content-type":"text/plain"});
                res.write("Data received and stored in database.txt");
                res.end();
            }
        });
    });
})
    
}
function write1(req,res){
    let body='';
    req.on('data',(chunk)=>{
        body+=chunk;
    });
    req.on('end',()=>{
        let base;
        try{
            base = JSON.parse(body);
        }
        catch{
            console.log("Received JSON:", base);
        }   
            
                
        fs.readFile("dataBase.txt","utf-8",(err,data)=>{
            if(err){
                console.log(err);
                res.writeHead(500, { "content-type": "text/plain" });
                res.end("Internal Server Error");
            }
            else{
                console.log(body)
                body=JSON.parse(body)
                data=JSON.parse(data)
                let index = data.findIndex(item => item.email === body.email2 && item.password === body.password2);
                console.log(index);
            
            if(index!=-1){
                res.writeHead(302);
                res.end();
            }
            else{
                res.writeHead(401, {"content-Type":"text/plain"});
                res.write("Invalid Credentials");
                res.end(data)
            }}
        });
    });
}

server.listen(4000,()=>{
    console.log("Server is listen");
})