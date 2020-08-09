const User   = require('../models/user')
const jwt    = require('jsonwebtoken')
const secret = 'thisTokenIsNotSecretChangeIt'

/**
 * Login function - Use username / password to login user
 * @param {*} req 
 * @param {*} res 
 */
 const login = async (req, res) => {
    const loginSuccess = await User.countDocuments({username:req.body.username, password:req.body.password})
    if(loginSuccess > 0){
        const token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (60 * 60),username: req.body.username }, secret);
        return res.send({token})
    }
    return res.send(`Connexion impossible`)
}

/**
 * Sign Up function - Register an user by params
 * @param {*} req 
 * @param {*} res 
 */
const signUp = async (req, res) => {
    // a document instance
     var newUser = new User({ username:req.body.username, password:req.body.password, usermail:req.body.usermail });
 
     // save model to database
     newUser.save(function (err, user) {
       if (err) return console.error(err);
     });

    return res.send(req.body.username + "succesfully added !")
}

/**
 * secretRoute function - just display a msg
 * @param {*} req 
 * @param {*} res 
 */
const secretRoute = async (req, res) => {
    return res.send('Secret Route')
}

module.exports = { login, signUp, secretRoute }