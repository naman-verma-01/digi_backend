const { mongoose } = require("mongoose")

// basic user info schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobile: Number,
    address: String,
    dob: Number,

}, { timestamp: true }

);


const User = mongoose.model('Digi_User', userSchema);
module.exports = User