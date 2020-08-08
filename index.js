const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Add Requires
const userRoute  = require('./routes/userRoute')
const atlas  = require('./services/database/atlas')
const cors = require('cors')
 
app.use(cors())
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

// Routes definition
app.use('/api/user', userRoute)

app.listen(3000, () => {
  console.log(`App running 3000`)
})

atlas.connectAtlas()