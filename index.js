import http from 'http';
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==="/users"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({name:"Sravani"}))
    }
    else{
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("hello this is the end")
    }
});
server.listen(5000,()=>{
    console.log('Server running at port ${5000}');
})