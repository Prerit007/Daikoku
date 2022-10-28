const path = require('path');
const exp = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
LocalStrategy = require("passport-local");
passportLocalMongoose = require("passport-local-mongoose");
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const MongoDBStore = require('connect-mongodb-session')(session);

const aboutData = require('./routes/about');
const homeData = require('./routes/home');
const contactData = require('./routes/contact');
const projectsData = require('./routes/projects');
const infoData = require('./routes/info');

//const authData = require('./routes/auth');
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
app.use(require("express-session")({
    secret:"Rusty is the best og in the world",
    resave: false,
    saveUninitialized: false
}));
// app.use(session({
//     secret: 'daikoku', 
//     resave: false, 
//     saveUninitialized: false, 
//     //store: store
// })
// );

// app.use(cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
// }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Student.authenticate()));
passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());

app.use(homeData);
app.use(aboutData);
app.use(contactData);
app.use(projectsData);
//app.use(authData);
app.use(infoData);

app.get("/",isLoggedIn, function(req, res){
    res.render("projects");
});

app.get("/signup", function(req, res){
    res.render("signup");
});
//handling user sign up
app.post("/signup", function(req, res){
Student.register(new Student({username:req.body.username}), req.body.password, function(err, student){
       if(err){
            console.log(err);
            return res.render('info');
        } //user stragety
        passport.authenticate("local")(req, res, function(){
            res.redirect("/info"); //once the user sign up
       }); 
    });
});

app.get("/login", function(req, res){
    res.render("login");
})

app.post("/login", passport.authenticate("local",{
    successRedirect:"/projects",
    failureRedirect:"/contact"
}),function(req, res){
    res.send("Student is "+ req.student.id);
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/about");
}


mongoose.connect('mongodb+srv://dg325:daikoku@cluster0.omymgdd.mongodb.net/Daikoku?retryWrites=true&w=majority')
.then(result => {
    app.listen(3002);
})
.catch(err => {
    console.log(err);
});
