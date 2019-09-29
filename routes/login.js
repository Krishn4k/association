// member.js - Member route module.
// On arrive ici en cas de /member/... 

const express = require('express')
const router = express.Router()

const login_controller = require('../controllers/login')

// /member/list > all the member
router.post('/', login_controller.login)

module.exports = router