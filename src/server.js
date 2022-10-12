const path = require('path');
const exp = require('express');
const bodyParser = require('body-parser');

const aboutData = require('./routes/about');
const homeData = require('./routes/home');

const app = exp();

app.use(aboutData);
app.use(homeData);

app.listen(3002);