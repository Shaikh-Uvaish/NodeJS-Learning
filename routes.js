
// const fs = require('fs');

// const requesthandler = (req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === '/'){
//         res.write('<html>');
//     res.write('<head><title> Enter a Message </title></head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//     //using return here to stop the code execution after sending the response for the root URL
//     }
//     if (url === '/message' && req.method === 'POST') {
//     const body = [];

//     req.on('data', (chunk) => {
//         body.push(chunk);
//     });

//     req.on('end', () => {
//         const parsedBody = Buffer.concat(body).toString();
//         const message = parsedBody.split('=')[1];

//         fs.writeFile('message.txt', message, (err) => {
//             res.writeHead(302, { Location: '/' });
//             return res.end();
//         });
//     });

//     return;  
// }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
// } 

// module.exports = requesthandler;




//<Buffer 6d 65 73 73 61 67 65 3d 68 65 6c 6c 6f 2b 66 72 6f 6d 2b 6e 6f 64 65 2b 73 65 72 76 65 72>
//message=hello+from+node+server
//This was output of chunks 