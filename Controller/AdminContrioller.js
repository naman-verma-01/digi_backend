const express = require("express");
const router = express.Router();
const { register,login } = require("../Services/AdminService");
const decrypt = require("../JWT/decrypt");


// API to create/add a new user
router.post("/register" ,async (req, res) => {
    try {
        const response = await register(req.body.name,req.body.email,req.body.password)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})

// API to update a user 
router.post("/login", async (req, res) => {
    try {
        const response = await login(req.body.email,req.body.password)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;