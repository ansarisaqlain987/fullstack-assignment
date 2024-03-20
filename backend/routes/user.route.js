const { register, login } = require("../controllers/user.controller");

module.exports = (app, express) => {
    const router = express.Router();

    router.post('/login', login);
    router.post('/logout');
    router.post('/register', register);

    router.get('/details');

    app.use('/user', router);
}