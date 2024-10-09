let http = require('http')

const server = http.createServer((req,res)=>{
        if (req.url == '/') {
            res.write('<h1>I am Happy To Learn Full Stack Web Development From PW Skills!</h1>')
        }
        res.end()
})
server.listen(5004)

console.log(`Server is running at the port 5004`);
