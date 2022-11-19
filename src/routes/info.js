const exp = require('express');
const path = require('path');

const infoController = require('../controllers/info');

const router = exp.Router();

router.get('/info', (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'about.html'));
    res.render('info', {
        isAuthenticated: req.isLoggedIn
    });
});

router.post('/info', infoController.saveInfo);

module.exports = router;