const { mongoose } = require("mongoose")

// basic user info schema
const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

}, { timestamp: true }

);


const Admin = mongoose.model('Digi_Admin', adminSchema);
module.exports = Admin