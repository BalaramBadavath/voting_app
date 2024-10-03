const mongoose = require('mongoose')

require('dotenv').config()
const mongoURL = process.env.MONGO_URI_LOCAL

mongoose.connect(mongoURL)
const db = mongoose.connection

db.on('connected', ()=>{console.log("Connected to MongoDB Server");})
db.on('error', (err)=>{console.error("Error in Code",err);})
db.on('disconnected', ()=>{console.log("Disconnected to MongoDB Server");})

module.exports = db;