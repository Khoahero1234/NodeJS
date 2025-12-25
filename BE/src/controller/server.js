// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Context-Type', 'text/plain');
//     res.end('Hello World\nKhoa sieu cap dep trai')
// });

// server.listen(port, hostname,() => {
//     console.log(`Server running at http://${hostname}:${port}/`)
// });

import express from 'express'; //khai báo thư viện express
import path from 'path'; // khai báo thư viện path
import { fileURLToPath } from 'url'; 
import dotenv from 'dotenv';
import configViewEngine from '../config/viewEngine.js';
import router from '../routes/web.js';
import connection from '../config/database.js'

dotenv.config({ path: './.env' })

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(">>> check evn: ", process.env);

const app = express(); // app express
const port = process.env.PORT; //khai báo cổng(port)
const hostname = process.env.HOST_NAME;

// khai báo config
configViewEngine(app)
//khai báo route
app.use('/',router)

app.listen(port, () => {
  console.log(`Server is running on ${port}` );
})

// Create the connection to database




 connection.query(
    'SELECT * FROM nodejs.User',
    function (err, results, fields){
        
        console.log(">>> result homepage= ", results)
    }
  );
 