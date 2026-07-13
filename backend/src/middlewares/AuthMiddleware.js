const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticate = (request, response, next) => {
    try {
        // Show access token first
        const token = request.headers['authorization']?.split(' ')[1];

        if(!token){
            return response.status(403).json({ message: 'Forbidden!' });
        };

        jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
            if (error) {
                return response.status(401).json({ message: 'Token Expired or Invalid' });
            };

            const user = await User.findById(decoded.id);

            if (!user) {
                return response.status(404).json({ message: 'User not Found! ' });
            }

            request.user = user;
            next();
        })

    } catch (error) {
        console.error(error);
        return response.status(500).json({ message: 'Something went wrong! '})
    }
}

const authorize = (roles) => {
    return (request, response, next) => {
        if(!request.user){
            return response.status(401).json({ message: "Unauthorized!" });
        };

        if(!roles.includes(request.user.role)){
            return response.status(403).json({ message: "Forbidden: Access Denied!" });
        }

        next();
    }
}


module.exports = {
    authenticate,
    authorize
}