var fs = require("fs");
var data = '';

//create a readable database stream
var readerStream = fs.createReadStream('input.txt');


//handle stream events ---> data,end and error
readerStream.on('data',function(chunk){
    data+=chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err);
});

