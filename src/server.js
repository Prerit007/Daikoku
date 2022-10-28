const path = require('path');
const exp = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
//const MongoDBStore = require('connect-mongodb-session')(session);

const aboutData = require('./routes/about');
const homeData = require('./routes/home');
const contactData = require('./routes/contact');
const projectsData = require('./routes/projects');

const authData = require('./routes/auth');
const Student = require('./models/student');

const MONGODB_URI = 'mongodb+srv://dg325:daikoku@cluster0.omymgdd.mongodb.net/Daikoku'

const app = exp();
// const store = new MongoDBStore({
//     uri: MONGODB_URI,
//     collection: 'sessions'
// });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(exp.static(path.join(__dirname, 'public')));
// app.use(session({
//     secret: 'daikoku', 
//     resave: false, 
//     saveUninitialized: false, 
//     //store: store
// })
// );

app.use(aboutData);
app.use(homeData);
app.use(contactData);
app.use(projectsData);
app.use(authData);

mongoose.connect('mongodb+srv://dg325:daikoku@cluster0.omymgdd.mongodb.net/Daikoku?retryWrites=true&w=majority')
.then(result => {
    app.listen(3002);
})
.catch(err => {
    console.log(err);
});
