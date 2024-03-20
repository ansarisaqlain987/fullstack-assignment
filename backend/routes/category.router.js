module.exports = (app, express) => {
    const router = express.Router();

    router.post('/create');
    router.post('/delete');

    router.get('/list');

    app.use('/category', router);
}