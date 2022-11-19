const exp = require('express');
const path = require('path');

const router = exp.Router();

const rootDir = require('../util/path');

router.get('/about', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'about.html'));
    res.render('about', {
        isAuthenticated: req.isLoggedIn
    });

});

module.exports = router;