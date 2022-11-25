const exp = require('express');

const pController = require('../controllers/projects');

const router = exp.Router();

router.get('/projects' , (req, res, next) => {
    res.render('projects', {
        isAuthenticated: req.isLoggedIn
    });
});

router.get('/p1', (req,res,next) => {
    let message = req.flash('alert');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('p1', {
        isAuthenticated: req.isLoggedIn,
        alertMessage: message
    });
});

router.get('/p2', (req,res,next) => {
    let message = req.flash('alert');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('p2', {
        isAuthenticated: req.isLoggedIn,
        alertMessage: message
    });
});

router.get('/p3', (req,res,next) => {
    let message = req.flash('alert');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('p3', {
        isAuthenticated: req.isLoggedIn,
        alertMessage: message
    });
});

router.get('/p4', (req,res,next) => {
    let message = req.flash('alert');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('p4', {
        isAuthenticated: req.isLoggedIn,
        alertMessage: message
    });
});

router.post('/p1', pController.saveP1);
router.post('/p2', pController.saveP2);
router.post('/p3', pController.saveP3);
router.post('/p4', pController.saveP4);

module.exports = router;