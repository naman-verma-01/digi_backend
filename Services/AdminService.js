const Admin = require("../Model/Admin")
const bcrypt = require("bcrypt")
const generateJWT = require("../JWT/generate")

// new user insertion
const register = async (name,email,password) => {
    let response = {}
    try {

        password = await bcrypt.hash(password, 10);

        var admin = new Admin({ name,email,password})
        admin = await admin.save()

        if (admin) {
            const accessToken = generateJWT({ name,email,password })
           
            response.status = 200,
                response.data = { msg: "Successfull", data: admin,accessToken }
            return response
        } else {
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

// updating users by identifying it _id
const login = async (email, password) => {
    let response = {}
    try {

        data = await Admin.find({ email })
        let comparing;
        console.log(data);
        if (data[0] != null) {
            comparing = await bcrypt.compare(password, data[0].password);
        }

        if (comparing) {
            const accessToken = generateJWT({name: data[0].name, email: data[0].email})


            response.status = 200,
                response.data = { msg: "Successfull", data: data, accessToken }
            return response
        }
        else {
            response.status = 200,
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

module.exports = { register, login }