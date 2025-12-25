import path from 'path'; // khai báo thư viện path
import { fileURLToPath } from 'url'; 
import express from 'express'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configViewEngine = (app) =>{
    //config template engine
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    
    // config template engine
    app.use(express.static(path.join(__dirname,'../public')))
}

export default configViewEngine;