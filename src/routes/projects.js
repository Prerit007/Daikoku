const exp = require('express');
const path = require('path');

const p1Controller = require('../controllers/projects');

const router = exp.Router();

router.get('/projects' , (req, res, next) => {
    res.render('projects', {
        isAuthenticated: req.isLoggedIn
    });
});

router.get('/p1', (req,res,next) => {
    res.render('p1', {
        isAuthenticated: req.isLoggedIn
    });
});

router.get('/p2', (req,res,next) => {
    res.render('p2', {
        isAuthenticated: req.isLoggedIn
    });
});

router.get('/p3', (req,res,next) => {
    res.render('p3', {
        isAuthenticated: req.isLoggedIn
    });
});

router.get('/p4', (req,res,next) => {
    res.render('p4', {
        isAuthenticated: req.isLoggedIn
    });
});

router.post('/p1', p1Controller.saveP1);

module.exports = router;