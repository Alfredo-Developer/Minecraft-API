const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(compression({
    level: 6,
    threshold: 100 * 1000
}));

// routes
app.use('/', require('./routes/index'));

// 404 !
app.use('/*', require('./routes/404'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Minecraft API Web Server is now online`);
});