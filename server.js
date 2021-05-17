//* 5. ----- Buid a Server -----
// const http = require('http');

// const server = http.createServer((request, response) => {
//     // console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);
//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
// })

// server.listen(3000); 

//* 6. ----- Introduction to Express.js -----
// const express = require('express');

// const app = express();

// //Get request
// app.get('/', (req, res) => {
//     res.send("getting root")
// });
// app.get('/profile', (req, res) => {
//     res.send("getting profile")
// });
// // Post request
// app.post('/profile', (req, res) => {
//     const user = {
//         name: 'Sally',
//         hobby: 'soccer'
//     }
//     res.send(user)
// });

// app.listen(3000);

//* 277.----- Express Middlewear -----
// const express = require('express');

// const app = express();

// app.use((req, res, next) => {
//     console.log('<h1>Helllllloooooo</h1>');
//     next()
// })

// app.get('/', (req,res) => {
//     res.send('testest')
// })

// app.listen(3000)


// const express = require('express');

// const app = express();

//* 279.----- Postman -----

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());
// //Get request
// app.get('/', (req, res) => {
//     res.send("getting root")
// });
// app.get('/profile', (req, res) => {
//     res.send("getting profile")
// });
// // Post request
// app.post('/profile', (req, res) => {
//     console.log(req.body);
//     res.send('Success')
// });

// app.listen(3000);

//* 281.----- RESTful APIs -----
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(express.static(__dirname + '/public'))

// // app.use(bodyParser.urlencoded({extended: false}))
// // app.use(bodyParser.json());

// // //Get request
// // app.get('/', (req, res) => {
// //     // req.query //is what we get when we do get query
// //     // req.body
// //     // req.header
// //     console.log(req.params) 
// //     res.status(404).send("not found");
// // });

// app.listen(3000);


