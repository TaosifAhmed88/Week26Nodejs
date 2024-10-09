let fs = require('fs');

fs.appendFile('nodejs_architecture.txt', '  Some Advantages: Its asynchronous model and non blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads consuming less memory and resources. Additionally it is highly scalable and provides high performance.  Node js is also flexible with multiple frameworks and makes the development process easier.',function(err){
    if (err) {
        console.log('Error in Appending File')       
    } else {
        console.log('Successfully Appended the File');
    }
})
fs.readFile('nodejs_architecture.txt',function(err,data){
    if (err) {
        console.log(err)
    } else {
        console.log('Done Reading File');
        
        console.log('',data.toString())
    }
})