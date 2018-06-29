var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('Sayhi!',function(){
    console.log('Hi......');
});

eventEmitter.on('Sayhello!',function(){
    console.log('Hello......');
});

console.log("before Say Hi!");
eventEmitter.emit('Sayhi!');
console.log("after say Hi");
console.log("before say hello!");
eventEmitter.emit('Sayhello!');
console.log("after say hello!");