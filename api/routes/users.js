import express from 'express';
const router = express.Router();


router.get('/',(req, res)=> {        
    res.send('Welcome')
})

router.get('/register',(req, res)=> {        
    res.send('Welcome')
})

export  default router