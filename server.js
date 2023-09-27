const http = require('http')

const PORT = 5000

const server = http.createServer((req, res)=>{
    res.end("Welcome to my Code !!")
})

server.listen(PORT, ()=>{
    console.log(`Server is listining at port:{PORT}`);
})