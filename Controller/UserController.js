const express = require("express");
const router = express.Router();
const { newUser, updateUser, deleteUser, getAllUser, filteredUser, getUserById } = require("../Services/UserService");
const decrypt = require("../JWT/decrypt");


const tokenAuth = async (req, res, next) => {
    
    let token = req.headers.authorization.split(' ')[1]

    let isUserAuthentic = await decrypt(token)
 
    if(isUserAuthentic){
        next()
    }else{
        return res.status(401).json({ "message": "Authentication failed", "status": "false", "source": "Auth Middleware" })
    }
}


// API to create/add a new user
router.post("/newUser",tokenAuth ,async (req, res) => {
    try {
        const response = await newUser(req.body.name,req.body.email,req.body.password,req.body.mobile,req.body.address,req.body.dob)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})

// API to update a user 
router.put("/updateUser",tokenAuth, async (req, res) => {
    try {
        const response = await updateUser(req.body._id,req.body.name,req.body.email,req.body.password,req.body.mobile,req.body.address,req.body.dob)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})

// API to delete a user 
router.delete("/deleteUser",tokenAuth, async (req, res) => {
    try {
        const response = await deleteUser(req.query._id)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})

// API to get all users 
router.get("/getAllUser",tokenAuth ,async (req, res) => {
    try {
        const response = await getAllUser()
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})

// API to get filtered users 
router.get("/filteredUser",tokenAuth, async (req, res) => {
    try {
        const response = await filteredUser(req.query.matchString)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


router.get("/getUserById",tokenAuth, async (req, res) => {
    try {
        const response = await getUserById(req.query._id)
        res.status(response.status).json(response.data)
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;