var http = require('http');
var server = http.createServer(function(request,response){
    console.log('request starting ....');
    //respond
    response.write('hello client!');
    response.end();
});
server.listen(7840);
console.log('Server running at http://localhost:7840/');