const jwt = require('jsonwebtoken');
require('dotenv').config()
exports.checktoken = async (token) => {  
            const token = req.headers.authorization.split(" ")[1]
            const decode = jwt.verify(token, process.env.SIGNING_KEY)
            return decode
 
}