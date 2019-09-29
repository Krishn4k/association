// member.js - Member route module.
// On arrive ici en cas de /member/... 

const express  = require('express')
const router   = express.Router()
const tokenMdw = require('../middlewares/check') 

const member_list_controller = require('../controllers/member/list')

// /member/list > all the member
router.get('/list', tokenMdw.checkToken, member_list_controller.member_list)
// /member/list/name > all the member filtered by name
router.get('/list/:name', tokenMdw.checkToken, member_list_controller.member_list_name)


module.exports = router