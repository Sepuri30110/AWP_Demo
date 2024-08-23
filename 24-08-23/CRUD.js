const http = require('http');
const fs = require('fs');
const std = require('./std.json');
const url = require('url');
const port = 8000;

http.createServer(function(req,res){
    res.setHeader('Content-Type','text/html');
    if(req.method === 'GET' && req.url === '/'){
        res.write("<h1>Welcome to REST API</h1>");
        res.end();
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
    if(req.method === "POST"){
        newStd = url.parse(req.url,true).query;
        std.push(newStd);
        mywrite(std);
        res.write("<h1>Student Created Successfully</h1>");
        res.end();
    }
    if(req.method === "PUT"){
        upStd = url.parse(req.url,true).query;
        for(s in std){
            if(std[s]['rollNo'] == upStd['rollNo']){
                std[s]['name'] = upStd['name'];        
                std[s]['dob'] = upStd['dob'];        
                std[s]['mail'] = upStd['mail'];   
            }
        }
        mywrite(std);
        res.write("<h1>Student Updated Successfully</h1>");
        res.end();
    }
    if(req.method === "DELETE"){
        delStd = url.parse(req.url,true).query;
        for(s in std){
            if(std[s]['rollNo'] == delStd['rollNo']){
                std.splice(s,1);
            }
        }
        mywrite(std);
        res.write("<h1>Student Deleted Successfully</h1>");
        res.end();
    }
    function mywrite(data){
        fs.writeFile('./std.json',JSON.stringify(data),function(err){
        
        });
    }
}).listen(port,()=>{
    console.log('Server Starting...');
    console.log('Server is running at http://localhost:'+port);
})