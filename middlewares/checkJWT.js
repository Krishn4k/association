const jwt = require('jsonwebtoken')

// Display list of all Members.
exports.checkToken = (req, res, next) => {
   const splitToken = req.headers.authorization.split(' ')
    console.log(splitToken[1])
   jwt.verify(splitToken[1], 'thisTokenIsNotSecretChangeIt', (err, decoded) => {
    if(err){
        return res.send('Dégage')
    }
    console.log(decoded.username) 
    next()
  })
}