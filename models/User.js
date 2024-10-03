const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    },
    mobile:{
        type: Number,
        required: true
    },
    email: {
        type: String,
    },
    aadharCardNumber:{
        type: Number,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:['admin','voter'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User;