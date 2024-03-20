const cryptoTs = require('crypto-ts');

exports.encrypt = (str) => {
    return cryptoTs.AES.encrypt(str, process.env.SECRET).toString();
}

exports.decrypt = (str) => {
    return cryptoTs.AES.decrypt(str, process.env.SECRET).toString(cryptoTs.enc.Utf8);
}