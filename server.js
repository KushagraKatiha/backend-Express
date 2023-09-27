const http = require('http')

const PORT = 5000

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.statusCode='200'    // Set the response_code
        res.setHeader("Content-Type", "text/plain")       // To  set the content type
    
        res.end(JSON.stringify({"HEllo": "Kushagra"}))
    }else if (req.url === '/about'){
        res.statusCode='200'    // Set the response_code
        res.setHeader("Content-Type", "text/plain")       // To  set the content type
    
        res.end(JSON.stringify({"name": "Kushagra"}))
    }else if (req.url === '/mentor'){
        res.statusCode='200'    // Set the response_code
        res.setHeader("Content-Type", "text/plain")       // To  set the content type
    
        res.end(JSON.stringify({"mentor": "Kushagra"}))
    }else{
        res.statusCode='500'    // Set the response_code
        res.setHeader("Content-Type", "text/plain")       // To  set the content type
    
        res.end('Error Occured')
    }
   
})

server.listen(PORT, ()=>{
    console.log(`Server is listining at port:{PORT}`);
})