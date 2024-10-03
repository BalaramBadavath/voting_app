const express = require('express')
const app = express()

const db = require('./db')
// const passport = require('./auth')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('dotenv').config()
const PORT = process.env.PORT || 3000

const userRoutes = require('./routes/userRoutes')
const candidateRoutes = require('./routes/candidateRoutes')

app.use('/user',userRoutes)
app.use('candidate',candidateRoutes)

app.listen(PORT,()=>{
    console.log(`Port Listeing on ${PORT}`);})