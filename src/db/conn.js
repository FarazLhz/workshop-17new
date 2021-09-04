const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Cricket', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("connection successful");
}).catch(() =>{
    console.log("No connection");
})