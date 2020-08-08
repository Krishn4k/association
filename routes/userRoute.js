// userRoute.js - route module.

const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/sign-up', userController.signUp)

module.exports = router