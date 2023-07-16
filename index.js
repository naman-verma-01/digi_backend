const app = require('express')()
const port = 1800;
const UserController = require('./Controller/UserController')
const AdminContrioller = require('./Controller/AdminContrioller')
const mongoose = require('mongoose')
const MONGODB_URI = "mongodb+srv://Naman_Verma:OA3vct6fPNU9SNN5@clustersih2022.kyg4jf6.mongodb.net/?retryWrites=true&w=majority"


const {json} = require('body-parser')
var cors = require('cors');
app.use(json());
app.use(cors())



// base route
app.use("/",UserController);
app.use("/admin",AdminContrioller);




const start = async () => {

    // mongoose connection
    mongoose.Promise = global.Promise;
    await mongoose.connect(MONGODB_URI);

    
    app.listen(port || port, async () => {
        console.log(`Server Connected To Port: ${port}`)
        
    });

};

start();