const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    number: {
        type: Number,
        require:true
    },
    party:{
        type: String,
        require:true
    },
    votes:[{
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                require:true
            },
            votedAt:{
                type: Date,
                default: Date.now
            }
        }],
    voteCount:{
        type:Number,
        default:0
    }
})

const Candidate = mongoose.model('Candidate', candidateSchema)
module.exports = Candidate