const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const data = JSON.parse(body);

      if (isNaN(data.num1)) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid request. num1 must be a number.');
      } else {
        const num = parseInt(data.num1);

        if (num % 2 === 0) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`The number ${num} is even`);
        } else {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end(`The number ${num} is odd`);
        }
      }
    });
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method not allowed.');
  }
});

module.exports = server;


// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     const chunks = [];
//     console.log(req.body);
//     req.on('data', chunk => {
//       console.log(chunk);
//       const buf = Buffer.from(chunk);
//       const str = buf.toString();
//       console.log(str);
//       chunks.push(str);
//       const obj = JSON.parse(chunks)
//       const value = obj.num;
//       console.log(obj.num)
    
//      if (value % 2 === 0) {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end(`The number ${value} is even`);
//       } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end(`The number ${value} is odd`);
//       }
//    });
//   }

  
// });


// module.exports = server;

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     const chunks = [];

//     req.on('data', chunk => {
//       const buf = Buffer.from(chunk);
//       const str = buf.toString();
//       chunks.push(str);
//       const obj = JSON.parse(chunks)
//       const value = obj.num1;
    
//      // Write the code here to check if the number is odd or even

//    });
//   }

  
// });


// module.exports = server;
