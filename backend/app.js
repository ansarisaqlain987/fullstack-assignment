const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes/user.route')(app, express);
require('./routes/category.router')(app, express);

app.listen(3000, () => {
    console.log('Server started at PORT ', 3000);
});