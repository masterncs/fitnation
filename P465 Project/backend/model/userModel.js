const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add a name']
    },
    role:{
        type: String,
        required: [true, 'Please select a role']
    },
    email:{
        type: String,
        required: [true, 'Please add a email'],
        unique: true
    },
    username:{
        type: String,
        required: [true, 'Please add a username'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please add a name']
    },
}, 
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
