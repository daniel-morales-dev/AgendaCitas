const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
require('./database');
const config = require('./settings');
const router = require('./router');

config(app);
router(app);

app.listen(process.env.PORT || port, () => {
    console.log('Server on port' + port);
})