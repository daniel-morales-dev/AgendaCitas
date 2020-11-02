const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
require('./database');
const config = require('./settings');
const router = require('./router');
const path = require('path');
config(app);
router(app);
app.use(express.static(__dirname + '/frontend'));
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'frontend', 'index.html');
    res.sendFile(index);
});

app.listen(process.env.PORT || port, () => {
    console.log('Server on port ' + port);
})