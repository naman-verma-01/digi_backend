const jwt = require('jsonwebtoken');
const fs = require('fs');

module.exports = (user) =>
{
    if(!user)
    {
        throw new Error("User is not provided for producing the JWT token");
    }
    
    //const privateKey = fs.readFileSync('./JWT/private.key');
    // const privateKey =  process.env.ACCESS_TOKEN_SECRET
    
    

    const token = jwt.sign(user, 'digi_side_kick')


      return token;


}