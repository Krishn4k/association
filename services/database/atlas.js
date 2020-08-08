const mongoose = require('mongoose')

const connectAtlas = () => { 
    const uri = "mongodb+srv://hd_sheets:x71tYTsidxMEIFnn@cluster0.z4ftf.mongodb.net/dev_users?retryWrites=true&w=majority"

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => { console.log('DB Connected') } )
    .catch( err => { console.log(err) } )    
}

module.exports = { connectAtlas }