const { UserModel } = require("../models/user.model");
const { createToken } = require("../utils/jwt.util");
const { getResponse } = require("../utils/response");
const { z } = require("zod");

const Login = z.object({
  email: z.string(),
  password: z.string(),
});
exports.login = async (req, res) => {
  try {
    const valid = Login.safeParse(req.body);
    if (!valid.success) {
      return res.status(400).send(null, valid.error.errors);
    }
    const data = valid.data;
    const user = await UserModel.findOne({ where: { email: data.email } });
    if (user.password !== data.password) {
      return res.send(401).send(getResponse(null));
    }
    const token = createToken(user);
    return res.send(200).send(
      getResponse(
        {
          token: token,
          user: {
            email: user.email,
            name: user.name,
          },
        },
        null
      )
    );
  } catch (err) {
    return res.status(500).send(getResponse(null, "Internal Server Error"));
  }
};

exports.logout = () => {};

const Register = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  gender: z.string(),
});
exports.register = async (req, res) => {
  try {
    const valid = Register.safeParse(req.body);
    if (!valid.success) {
      return res.status(400).send(null, valid.error.errors);
    }
    const data = valid.data;
    const user = await UserModel.create(data);
    return res.send(201).send(getResponse(user));
  } catch (err) {
    return res.status(500).send(getResponse(null, "Internal Server Error"));
  }
};

exports.details = () => {};
