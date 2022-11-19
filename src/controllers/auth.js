const bcrypt = require('bcryptjs');

const Student = require('../models/student');

exports.getLogin = (req, res, next) => {
    res.render('login', {
        path: '/login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    Student.findOne({email: email})
    .then(student => {
        if (!student) {
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
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
    })
};

exports.getSignup = (req, res, next) => {
    res.render('signup', {
        path: '/signup',
        isAuthenticated: false
    });
};


exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    Student.findOne({email: email})
    .then(stdDoc => {
        if (stdDoc) {
            return res.redirect('/signup');
        }
        return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
            const student = new Student({
                email: email,
                password: hashedPassword,
                projectList: {projects:[]},
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