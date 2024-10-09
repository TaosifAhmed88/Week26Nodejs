let fs = require('fs');

fs.readFile('nodejs_architecture.txt',function(err,data){
    if (err) {
        console.log(err)
    } else {
        console.log('',data.toString());
        
    }
})