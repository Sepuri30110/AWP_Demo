const http = require('http');
const fs = require('fs');
const std = require('./std.json');
const url = require('url');
const port = 8000;

http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html');
    if(req.method === 'GET' && req.url === '/'){
        res.write("<h1>Welcome to REST API</h1>");
        res.end;
    }
    if(req.method === 'GET' && req.url === '/list'){
        fs.readFile('./std.json',function(err,data){
            if(err){
                res.end("404 NOT FOUND");
            }
            res.write(data);
            res.end();
        })
    }
}).listen(port,()=>{
    console.log('Server Starting...');
    console.log('Server is running at http://localhost:'+port);
})