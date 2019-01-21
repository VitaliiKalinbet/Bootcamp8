const mongoose = require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongo....", {
    useMongoClient: true
})
.then(()=> (console.log('MongoDB has started')))
.catch(e=> (console.log(e)))