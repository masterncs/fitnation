const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')



//@description Register a new user
//@route POST /api/users
//access public


const registerUser = asyncHandler(async (req,res) => {
    const {name,role,email,username,password } = req.body

    if(!name || !role || !email || !username || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exists
    const userExits = await User.findOne({email})

    if(userExits){
        res.status(400)
        throw new Error('email already exists.')
    }

    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //create user
    const user = await User.create({
        name,
        role,
        email,
        username,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id) //generates an authentication token for the user id
        })
        } else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    
})

//@description Authenticate a user
//@route POST /api/users/login
//access private after adding authentication


const loginUser = asyncHandler(async (req,res) => {

    const {email,password} = req.body

    //check for user email
    const user = await User.findOne({email})
    //get user role
    const role = await user.role

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    
    }
    else{
        res.status(400)
        throw new Error('Invalid Credentials')
    }
})


//@description gets user data
//@route GET /api/users/me
//access private


const getMe = asyncHandler(async (req,res) => {
     res.status(200).json(req.user)
     })



//generate a JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}