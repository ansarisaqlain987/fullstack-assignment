const jwt = require('jsonwebtoken');
const { encrypt, decrypt } = require('./security.util');

exports.createToken = (data) => {
    const token = jwt.sign(data, process.env.KEY);
    return encrypt(token);
}

exports.decodeToken = (token) => {
    const decToken = decrypt(token);
    return jwt.decode(decToken);
}

exports.verifyToken = (token) => {
    const decToken = decrypt(token);
    return jwt.verify(decToken, process.env.KEY)
}