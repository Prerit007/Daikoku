const path = require('path');
const exp = require('express');
const bodyParser = require('body-parser');

const app = exp();

app.set('view engine', 'ejs');
app.set('views', 'views');

const aboutData = require('./routes/about');
const homeData = require('./routes/home');

app.use(bodyParser.urlencoded({extended: false}));
app.use(exp.static(path.join(__dirname, 'public')));

app.use(aboutData);
app.use(homeData);

app.listen(3002);