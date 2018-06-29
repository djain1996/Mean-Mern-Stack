var http = require('http');
var server = http.createServer(function (request,response){
    console.log(request.method);
    if(request.url=="/hello"){
    console.log('request starting..');
    response.write('hello! fraaaands');
    response.end();
    }
    if(request.url=="/hi") {
        console.log('request starting..');
    response.write('khana khalo');
    response.end();
    
    }
    
});
server.listen(3000);
console.log('server running at http://127.0.0.1:3000/');