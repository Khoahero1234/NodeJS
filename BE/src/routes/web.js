import express from 'express'
import { getHomePage } from '../controller/homeController.js'

const router = express.Router();

router.get('/', getHomePage);
// router.get('/', (req, res) => {        
//   res.send('Hello');
// })

router.get('/abc', (req, res) => {
    // res.send('<h1>muahahahahah</h1>')
    res.render('sample.ejs');
}
)

export default router;