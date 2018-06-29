var http=require("http");
//var data=require("./data/inventory");
var d=require('./AreaofRectangleBL.js');
var a = new d();
var b=require('./Temperature.js');
var c=new b();
var length = 12;
var breadth = 2;
var fahreneit = 98.7;
var celcius = 37.4;
http.createServer(function(req,res){
    if(req.url=="/"){
        res.end("length: "+length+" breadth: "+breadth)
        //res.end(JSON.stringify(data));
    }else if(req.url==="/area"){
       var area = a.calculateArea(length,breadth);
       res.end("Area : "+area);
    }
    else if(req.url ==="/temp"){
        var far = c.Temp1(fahreneit);
        var cel =c.Temp2(celcius);
        res.end("Temperature in celcius : "+cel+", Temperature in farheneit : "+far);
    }
    else{
        res.end("404 error...Data not found");
    }    
}).listen(3000);
console.log("Server listening on port 3000");