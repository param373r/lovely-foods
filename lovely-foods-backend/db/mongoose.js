const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@lovely-foods.6bxlwfa.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Couldn't connect to the database"));
db.once('open',function(){
    console.log('DB connection established!')
})