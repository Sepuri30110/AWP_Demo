const exp = require('express');
const app = exp();
const fs = require('fs')
const stu = require('std.json');
const bp = require('body-parser');
const port = 9000;


app.use(bp.urlencoded({ extended: true }));
app.use(bp.json())

app.get("/",function(req,res){
    res.write("<h1>Welcome to REST API</h1>");
    res.end();
})

app.post("/",function(req,res){
    newStd = url.parse(req.url,true).query;
    std.push(newStd);
    mywrite(std);
    res.write("<h1>Student Created Successfully</h1>");
    res.end();
})

app.put("/",function(req,res){
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
})

app.delete("/",function(req,res){
    delStd = url.parse(req.url,true).query;
    for(s in std){
        if(std[s]['rollNo'] == delStd['rollNo']){
            std.splice(s,1);
        }
    }
    mywrite(std);
    res.write("<h1>Student Deleted Successfully</h1>");
    res.end();
})

function mywrite(data){
    fs.writeFile('./std.json',JSON.stringify(data),function(err){
    
    });
}

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})