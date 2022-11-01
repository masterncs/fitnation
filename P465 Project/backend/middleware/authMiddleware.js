const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(async (req,res,next) => {

    //check if token exists and it is formatted correctly
    let token 
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            //get token from bearer header
            token = req.headers.authorization.split(' ')[1]

            //verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            //get user from the token by the id, ignore hashed password
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error){
            console.log(error)
            res.status(401) //not authorized
            throw new Error('Not authorized.')

        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized: no token found.')
    }
})

//bearer token
module.exports = { protect }