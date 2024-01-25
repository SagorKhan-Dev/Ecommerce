var jwt = require('jsonwebtoken');
const UserList = require('../models/userSchema');
async function emailVerificationController(req, res){
    // console.log(req.headers)
    const { authorization } = req.headers
    console.log(authorization)
    // decoded
    var decoded = jwt.verify(authorization, 'sk');
    console.log(decoded.email)
    const updateUser = await UserList.findOneAndUpdate(
        { email: decoded.email },
        { verified: true },
        { new: true }
    )
    res.json(updateUser)
}

module.exports = emailVerificationController;