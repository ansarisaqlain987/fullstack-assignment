const { getResponse } = require("../utils/response")

exports.authMiddleware = (req, res, next) => {
    return res.status(200).send(getResponse({}, null))
}