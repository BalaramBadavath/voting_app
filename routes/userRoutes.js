const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req,res)=>{
    try{
        const response = await User.find()
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})

router.post('/', async (req,res)=>{
    try{
            
    }
    catch(err){
        console.log(err);                                                               
    }
})

module.exports = router