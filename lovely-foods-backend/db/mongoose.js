const mongoose = require('mongoose')

mongoose.connect("process.env.MONGODB_URL", {
    useNewUrlParser: true
})

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Couldn't connect to the database"));
db.once('open',function(){
    console.log('DB connection established!')
})