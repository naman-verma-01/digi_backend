const User = require("../Model/User")






// new user insertion
const newUser = async (name,email,password,mobile,address,dob) => {
    let response = {}
    try {


        var user = new User({ name,email,password,mobile,address,dob })
        user = await user.save()

        if (user) {
            response.status = 200,
                response.data = { msg: "Successfull", data: user }
            return response
        } else {
            response.status = 400,
                response.data = { msg: "Creattion Failed. Invalid Data" }
            return response
        }

    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}

// updating users by identifying it _id
const updateUser = async (_id, name, email, password, mobile, address, dob) => {
    let response = {}
    try {


        data = await User.findOneAndUpdate({ _id }, { name, email, password, mobile, address, dob })

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            response.status = 200,
                response.data = { msg: "No such User" }
            return response
        }

    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


const deleteUser = async (_id) => {
    let response = {}
    try {

        /// DELETING CODE
        let data = await User.deleteOne({ _id });

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


// get all users
const getAllUser = async () => {
    let response = {}
    try {
        let data = await User.find()


        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


// filtering user by name, email, address and mobile number
const filteredUser = async (matchString) => {
    let response = {}
    try {

        // getting all users
        let data = await User.find()


        data = data.filter((elem) => ((`${elem.name}`).match(matchString)?.length > 0 || (`${elem.address}`).match(matchString)?.length > 0 || (`${elem.mobile}`).match(matchString)?.length > 0 || (`${elem.email}`).match(matchString)?.length > 0))

        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}

const getUserById = async (_id) => {
    let response = {}
    try {

        // getting all users
        let data = await User.find({_id})



        if (data) {
            response.status = 200,
                response.data = { msg: "Successfull", data: data }
            return response
        }
        else {
            console.log("Error 400")
            response.status = 400,
                response.data = { msg: "failed" }
            return response

        }
    } catch (error) {
        console.log(error)
        response.status = 500,
            response.data = { msg: error }
        return response

    }
}


module.exports = { newUser, updateUser, deleteUser, getAllUser, filteredUser, getUserById }