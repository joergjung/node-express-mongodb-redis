var http = require('http');

// callback function has request and response object
http.createServer(function(req, res) {
    // write Header (Staus 200)
    res.writeHead(200, {
        'Content-Type': 'text/plain'        
    });
    res.end('Hello world!!\n');    
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000');
