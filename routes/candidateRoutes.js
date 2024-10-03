const express = require('express')
const router = express.Router()
const Candidate = require('../models/Candidate')

router.get('/', async (req,res)=>{
    try{
        const response = await Candidate.find()
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"})
    }
})

module.exports = router