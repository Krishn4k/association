const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//Import du fichier de routes "member.js"
const member = require('./routes/member')
const login  = require('./routes/login')

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))


//On utilise la route définie pour l'appel à /member (>>member.js)
app.use('/member', member)
app.use('/login', login)


app.listen(3000, () => {
  console.log(`App running 3000`)
})

mongoose.connect('mongodb://localhost:27017/Asso', { useNewUrlParser: true, useUnifiedTopology: true }).catch(error => handleError(error)).then(
    () => { console.log('DB Connected') },
    err => { console.log(err) }
  )