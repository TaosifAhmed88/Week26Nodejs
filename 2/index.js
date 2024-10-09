let fs = require('fs');

fs.writeFile('nodejs_architecture.txt','Node.js  architecture consists of several components that work together to handle incoming client requests and process responses. These components are: Requests, Nodejs Server, Event Queue, Event Loop, Thread Pool, External Resources',function(err){
    if(err){
        console.log(err);
    }
})