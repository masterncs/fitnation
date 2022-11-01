const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')

const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)

router.post('/login', loginUser)


//protect the route of getting user information through jwt token authorization
router.get('/me', protect, getMe)



module.exports = router