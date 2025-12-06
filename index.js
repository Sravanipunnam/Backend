import express from 'express';

const app=express(); // for using app you can able to use all express modules

//to add some data on browser
app.get('/',(req,res)=>{
    res.send("hello  this is from backend");
})

app.listen(5000,()=>{
    console.log("server is running at port 5000");
})



//Previous model to use backend
// import http from 'http';
// const server=http.createServer((req,res)=>{
//     console.log(req.method);
//     if(req.url==="/users"){
//         res.writeHead(200,{"content-type":"application/json"});
//         res.end(JSON.stringify({name:"Sravani"}))
//     }
//     else{
//         res.writeHead(200,{"content-type":"text/plain"});
//         res.end("hello this is the end")
//     }
// });
// server.listen(5000,()=>{
//     console.log('Server running at port ${5000}');
// })