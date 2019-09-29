const Admin  = require('../models/admin')
const jwt    = require('jsonwebtoken')
const secret = 'thisTokenIsNotSecretChangeIt'

// Display list of all Members.
exports.login = async (req, res) => {
    const loginSuccess = await Admin.countDocuments({username:req.body.username, password:req.body.password})
    if(loginSuccess > 0){
        const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60),username: req.body.username }, secret);
        return res.send(token)
    }
    return res.send(`Connexion impossible`)
}