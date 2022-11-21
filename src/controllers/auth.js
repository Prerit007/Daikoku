const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const Student = require('../models/student');

// const transport = nodemailer.createTransport(sendgridTransport({
//     auth: {
//         api_key: //add api key from sendgrid
//     }
// }));

exports.getLogin = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('login', {
        path: '/login',
        isAuthenticated: false,
        errorMessage: message
    });
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Student.findOne({email: email})
    .then(student => {
        if (!student) {
            req.flash('error', "Invalid email or password");
            return res.redirect('/login');
        }
        bcrypt
        .compare(password, student.password)
        .then(doMatch => {
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.student = student;
                req.session.isInfoComp=false;
                console.log("Login successful");
                return req.session.save(err => {
                    if(!student.isInfoComplete) {
                        return res.redirect('/info'); }
                    return res.redirect('/home'); //it should be redirected to profile
            });
            }
            req.flash('error', "Invalid email or password");
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
    })
};

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('signup', {
        path: '/signup',
        isAuthenticated: false,
        errorMessage: message
    });
};


exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    Student.findOne({email: email})
    .then(stdDoc => {
        if (stdDoc) {
            req.flash('error', 'E-Mail exists already, please pick a different one.')
            return res.redirect('/signup');
        }
        //TODO check confirmPassword == password
        return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
            const student = new Student({
                email: email,
                password: hashedPassword,
                projectList: {projects:[]},
                name: "",
                about: "",
                college: ""
            });
            return student.save();
        })
    })
    .then(result => {
        res.redirect('/login');
    })
    .catch(err=> {
        console.log(err);
    });
};


exports.postLogout = (req, res, next) => {
    req.session.isLoggedIn = false;
    req.session.destroy(err => {
        res.redirect('/login');
    });
};