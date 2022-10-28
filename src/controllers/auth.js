const bcrypt = require('bcryptjs');

const Student = require('../models/student');

exports.getLogin = (req, res, next) => {
    const isLoggedIn = req
    .get('Cookie')
    .split(';')[1]
    .trim()
    .split('=')[1];
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
                return req.session.save(err => {
                    console.log(err);
                    res.redirect('/home'); //it should be redirected to profile
                });
            }
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
    })
    res.redirect('/home');
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
    Student.findOne({_email: email})
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
                prodId: null
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